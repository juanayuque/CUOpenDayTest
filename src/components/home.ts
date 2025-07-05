import { renderFilters } from './filters'
import cuLogo from '/cu-logo.svg'
import { attachFilterEvents, renderCardsAndAttachEvents } from './interactions'

export function renderHomePage(data: any)  {
  const app = document.querySelector<HTMLDivElement>('#app')!

  if (!data.topics) {
    app.innerHTML = '<p class="text-red-600">No Open Day data found.</p>'
    return
  }

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

  `

  attachFilterEvents()
  renderCardsAndAttachEvents(data.topics)

}