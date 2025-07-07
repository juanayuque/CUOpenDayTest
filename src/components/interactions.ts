import { renderCards } from './topics'
import { renderListView } from './list'
import { applyFilters, clearFilters } from './filterHandlers'

let searchTerm = ''
let isListView = false
let expandedId: number | null = null
let filteredTopics: any[] = []

export function setSearchTerm(term: string) {
  searchTerm = term
}
export function setFilteredTopics(topics: any[]) {
  filteredTopics = topics
}

export function attachFilterEvents() {
  const applyBtns = document.querySelectorAll('#applyFilters')
  const clearBtns = document.querySelectorAll('#clearFilters')
  const toggleViewBtns = document.querySelectorAll('.toggle-view-btn')

  toggleViewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      isListView = !isListView
      expandedId = null
      renderCardsAndAttachEvents()

      const icon = btn.querySelector('span')
      if (icon) {
        icon.textContent = isListView ? 'grid_view' : 'menu_book'
      }
    })
  })

  applyBtns.forEach(btn => {
    btn.addEventListener('click', handleApply)
  })

  clearBtns.forEach(btn => {
    btn.addEventListener('click', handleClear)
  })
}



function handleApply(event: Event) {
  const button = event.currentTarget as HTMLElement
  const container = button.closest('#mobileFiltersContainer, #filtersContainer') as HTMLElement | null
  if (!container) return

  const data = (window as any).openDayData
  filteredTopics = applyFilters(data, searchTerm.toLowerCase(), container)
  expandedId = null
  renderCardsAndAttachEvents()

  // Hide mobile panel after applying
  const mobilePanel = document.getElementById('mobile-filters-panel')
  mobilePanel?.classList.add('hidden')
}


function handleClear(event: Event) {
  const button = event.currentTarget as HTMLElement
  const container = button.closest('#mobileFiltersContainer, #filtersContainer') as HTMLElement | null
  if (!container) return

  const data = (window as any).openDayData
  filteredTopics = clearFilters(data, container)
  expandedId = null
  renderCardsAndAttachEvents()

  // Close only for mobile panel
  if (container.id === 'mobileFiltersContainer') {
    const mobilePanel = document.getElementById('mobile-filters-panel')
    mobilePanel?.classList.add('hidden')
  }
}

export function renderCardsAndAttachEvents() {
  const container = document.getElementById('cardsContainer')!

  const visibleTopics = expandedId != null
    ? filteredTopics.filter(t => t.id === expandedId)
    : filteredTopics

  if (isListView && expandedId == null) {
    container.className = "max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"


    const allPrograms = visibleTopics.flatMap(topic =>
      topic.programs.map((prog: any) => ({
        ...prog,
        topic_id: topic.id,
        topicName: topic.name,
        topicDescription: topic.description,
        topicImage: topic.cover_image
      }))
    )

    container.innerHTML = renderListView(allPrograms)

    document.querySelectorAll('[data-open-id]')?.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt((btn as HTMLElement).getAttribute('data-open-id')!)
        expandedId = id
        renderCardsAndAttachEvents()
      })
    })
  } else {
    container.className = "body-container"

    container.innerHTML = renderCards(visibleTopics, expandedId)

    document.querySelectorAll('[data-open-id]')?.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt((btn as HTMLElement).getAttribute('data-open-id')!)
        expandedId = id
        renderCardsAndAttachEvents()
      })
    })

    document.querySelector('[data-back]')?.addEventListener('click', () => {
      expandedId = null
      renderCardsAndAttachEvents()
    })
  }
}
