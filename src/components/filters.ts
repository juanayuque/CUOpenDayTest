// components/filters.ts
export function renderFilters() {
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">

        <!-- Filter Group -->
        <div class="flex flex-wrap gap-4 items-center">
          
          <!-- Topics Dropdown -->
          <div>
            <label for="topicFilter" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Topics</label>
            <select id="topicFilter" class="mt-1 block w-40 rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option value="">All</option>
            </select>
          </div>

          <!-- Accessibility Dropdown -->
          <div>
            <label for="accessibilityFilter" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Accessibility</label>
            <select id="accessibilityFilter" class="mt-1 block w-40 rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option value="">No requirements</option>
            </select>
          </div>

          <!-- Locations Dropdown -->
          <div>
            <label for="locationFilter" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
            <select id="locationFilter" class="mt-1 block w-40 rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option value="">All</option>
            </select>
          </div>

          <!-- Hour Filter Dropdown -->
          <div>
            <label for="timeFilter" class="block text-sm font-medium text-gray-700 dark:text-gray-300">After</label>
            <select id="timeFilter" class="mt-1 block w-32 rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option value="">Any time</option>
            </select>
          </div>

          <!-- Search Input -->
          <div class="flex-1">
            <label for="filterSearchInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Search</label>
            <input
              id="filterSearchInput"
              type="search"
              placeholder="Search events..."
              class="mt-1 w-full sm:w-64 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex gap-2">
          <button id="applyFilters" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
            Apply
          </button>
          <button id="clearFilters" class="icon-button" title="Clear Filters">
            <span class="material-symbols-outlined">cleaning_services</span>
          </button>
          <button id="toggleView" class="icon-button" title="Toggle View">
            <span class="material-symbols-outlined">menu_book</span>
          </button>
        </div>

      </div>
    </div>
  `
}
