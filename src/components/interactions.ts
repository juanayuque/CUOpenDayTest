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
  const applyBtn = document.getElementById('applyFilters')
  const clearBtn = document.getElementById('clearFilters')
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

  applyBtn?.addEventListener('click', handleApply)
  clearBtn?.addEventListener('click', handleClear)
}


function handleApply() {
  const data = (window as any).openDayData
  filteredTopics = applyFilters(data, searchTerm.toLowerCase())
  expandedId = null
  renderCardsAndAttachEvents()
}

function handleClear() {
  const data = (window as any).openDayData
  filteredTopics = clearFilters(data)
  expandedId = null
  renderCardsAndAttachEvents()
}

export function renderCardsAndAttachEvents() {
  const container = document.getElementById('cardsContainer')!

  const visibleTopics = expandedId != null
    ? filteredTopics.filter(t => t.id === expandedId)
    : filteredTopics

  if (isListView && expandedId == null) {
    container.className = "body-container"


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
    container.className = container.className = "body-container"

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
