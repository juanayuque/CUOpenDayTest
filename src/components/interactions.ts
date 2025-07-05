import { renderCards } from './topics'
import { renderListView } from './list'

let isListView = false
let expandedId: number | null = null

export function attachFilterEvents() {
  const applyBtn = document.getElementById('applyFilters')
  const clearBtn = document.getElementById('clearFilters')
  const toggleViewBtn = document.getElementById('toggleView')

  applyBtn?.addEventListener('click', handleApply)
  clearBtn?.addEventListener('click', handleClear)
  toggleViewBtn?.addEventListener('click', () => {
  })
}

function handleApply() {
}

function handleClear() {

}

export function renderCardsAndAttachEvents(topics: any[]) {
  const container = document.getElementById('cardsContainer')!
  const visibleTopics = expandedId != null
    ? topics.filter(t => t.id === expandedId)
    : topics

  if (isListView && expandedId == null) {
    container.className = "max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"

    const allPrograms = visibleTopics.flatMap(topic =>
      (topic.programs || []).map((prog: any) => ({
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
        renderCardsAndAttachEvents(topics)
      })
    })
  } else {
    container.className = "max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8"
    container.innerHTML = renderCards(visibleTopics, expandedId)

    document.querySelectorAll('[data-open-id]')?.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt((btn as HTMLElement).getAttribute('data-open-id')!)
        expandedId = id
        renderCardsAndAttachEvents(topics)
      })
    })

    document.querySelector('[data-back]')?.addEventListener('click', () => {
      expandedId = null
      renderCardsAndAttachEvents(topics)
    })
  }
}

