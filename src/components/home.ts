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
    <main class="min-h-screen bg-cardiff-white dark:bg-gray-900 text-cardiff-dark dark:text-white font-sans transition-colors pb-20">
    
      <div class="title-container">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${cuLogo}" alt="Cardiff University Logo" class="h-16 w-auto mx-auto" />
        </a>
        <h1 class="text-4xl font-bold mb-2">Cardiff University Open Day</h1>
        <p class="text-lg text-cardiff-grey dark:text-gray-300 max-w-2xl mx-auto">
          Browse upcoming sessions and explore events to plan your visit.
        </p>
      </div>

      <!-- Mobile Filter Navbar -->
      <div class="filter-navbar flex justify-between items-center px-4 py-3 bg-white dark:bg-gray-900 border-b dark:border-gray-700 sm:hidden">
        <button id="mobile-filter-toggle" class="btn-outline flex items-center gap-2 text-sm">
          <span class="material-symbols-outlined">filter_list</span>
          Filters
        </button>
        <div class="flex items-center gap-2">
          <!-- Blank space to preserve layout where search was -->
          <div class="w-40"></div>
          <button class="icon2-button toggle-view-btn" title="Toggle View">
            <span class="material-symbols-outlined">grid_view</span>
          </button>
        </div>
      </div>


      <!-- Mobile Filter Panel (off-canvas) -->
      <div id="mobile-filters-panel" class="hidden fixed inset-0 z-40 bg-black bg-opacity-30 sm:hidden">
        <div class="absolute bottom-0 w-full bg-white dark:bg-gray-800 rounded-t-lg p-4 shadow-lg max-h-[90%] overflow-y-auto">
          <div class="flex justify-between items-center mb-2">
            <h2 class="text-lg font-semibold">Filters</h2>
            <button id="mobile-filter-close" class="icon-button">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <div id="mobileFiltersContainer" class="grid grid-cols-2 gap-3">
            ${renderFilters(data.topics || [])}
          </div>
        </div>
      </div>

      <!-- Desktop Filters -->
      <div id="filtersContainer" class="hidden sm:flex">
        ${renderFilters(data.topics || [])}
      </div>

      <section id="cardsContainer" class="bg-cardiff-grey rounded-lg shadow p-6 flex flex-col"></section>
    </main>
  `

  // ✅ DOM must be updated before accessing new elements
  setTimeout(() => {
    // Mobile: Open/close functionality
    const toggleBtn = document.getElementById('mobile-filter-toggle')
    const closeBtn = document.getElementById('mobile-filter-close')
    const mobilePanel = document.getElementById('mobile-filters-panel')

    toggleBtn?.addEventListener('click', () => {
      mobilePanel?.classList.remove('hidden')
    })

    closeBtn?.addEventListener('click', () => {
      mobilePanel?.classList.add('hidden')
    })

    // Resize mobile panel buttons
    document.querySelectorAll('#mobileFiltersContainer button').forEach(btn => {
      btn.classList.add('text-sm', 'px-2', 'py-1')
    })

    // Optional: shrink dropdowns too
    document.querySelectorAll('#mobileFiltersContainer select, #mobileFiltersContainer input').forEach(el => {
      el.classList.add('py-1', 'text-sm')
    })
  }, 0)

  attachFilterEvents()
  renderCardsAndAttachEvents()
}
