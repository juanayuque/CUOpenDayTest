import { renderFilters } from './filters'
import cuLogo from '/cu-logo.svg'
import { attachFilterEvents, renderCardsAndAttachEvents } from './interactions'

export function renderHomePage(data: any, searchTerm: string, setFilteredTopics: (topics: any[]) => void) {
  const app = document.querySelector<HTMLDivElement>('#app')!
  const term = searchTerm.toLowerCase()

  const filteredTopics = (data.topics || []).filter((topic: any) => {
    const name = topic.name?.toLowerCase() || ''
    const description = topic.description?.toLowerCase() || ''
    const shortDesc = topic.description_short?.toLowerCase() || ''
    const matchesTopicText =
      name.includes(term) || description.includes(term) || shortDesc.includes(term)

    const matchesProgram = (topic.programs || []).some((prog: any) => {
      const progTitle = prog?.title?.toLowerCase() || ''
      const progRoom = prog?.room?.toLowerCase() || ''
      return progTitle.includes(term) || progRoom.includes(term)
    })

    return matchesTopicText || matchesProgram
  })

  setFilteredTopics(filteredTopics)

  app.innerHTML = `
   <div class="min-h-screen bg-cardiff-white font-sans px-2 py-6">
  <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${cuLogo}" alt="Cardiff University Logo" class="h-16 w-auto" />
        </a>
        <h1 class="text-4xl font-bold mb-2">Cardiff University Open Day</h1>
        <p class="text-lg text-cardiff-grey dark:text-gray-300 max-w-2xl mx-auto">
          Browse upcoming sessions and explore events to plan your visit.
        </p>
      </div>

      <div id="filtersContainer">
        ${renderFilters(data.topics || [])}
      </div>

      <section id="cardsContainer" class="bg-cardiff-grey rounded-lg shadow p-6 flex flex-col">
      </section>
    </main>
  `

  attachFilterEvents()
  renderCardsAndAttachEvents()
}
