// components/filters.ts
export function renderFilters(topics: any[]) {
  const uniqueTopics = Array.from(
    new Set(topics.map((t: any) => t.name?.trim()).filter(Boolean))
  ).sort()

  const locationSet = new Set<string>()
  topics.forEach((topic: any) => {
    topic.programs?.forEach((program: any) => {
      const locTitle = program.location?.title
      if (locTitle) locationSet.add(locTitle)
    })
  })
  const sortedLocations = Array.from(locationSet).sort()

  const locationOptions = sortedLocations.map(
    (loc) => `<option value="${loc}">${loc}</option>`
  ).join('')

  return `
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-12 gap-4 items-end mb-6">

      <!-- Topics -->
      <div class="col-span-2">
        <label for="topicFilter" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Topics</label>
        <select id="topicFilter" class="w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white shadow-sm focus:ring-blue-500 focus:border-blue-500">
          <option value="">All</option>
          ${uniqueTopics.map(topic => `<option value="${topic}">${topic}</option>`).join('')}
        </select>
      </div>

      <!-- Accessibility -->
      <div class="col-span-2">
        <label for="accessibilityFilter" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Accessibility</label>
        <select id="accessibilityFilter" class="w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white shadow-sm focus:ring-blue-500 focus:border-blue-500">
          <option value="">No requirements</option>
          <option value="wheelchair">Wheelchair Accessible</option>
          <option value="bike_parking">Bike Parking</option> 
          <option value="parking">Car Parking</option>      
        </select>
      </div>

      <!-- Location -->
      <div class="col-span-2">
        <label for="locationFilter" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
        <select id="locationFilter" class="w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white shadow-sm focus:ring-blue-500 focus:border-blue-500">
          <option value="">All</option>
          ${locationOptions}
        </select>
      </div>

      <!-- After -->
      <div class="col-span-2">
        <label for="timeFilter" class="block text-sm font-medium text-gray-700 dark:text-gray-300">After</label>
        <select id="timeFilter" class="w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white shadow-sm focus:ring-blue-500 focus:border-blue-500">
          <option value="">Any time</option>
          <option value="09">9 AM</option>
          <option value="10">10 AM</option>
          <option value="11">11 AM</option>
          <option value="12">12 PM</option>
          <option value="13">1 PM</option>
          <option value="14">2 PM</option>
          <option value="15">3 PM</option>
          <option value="16">4 PM</option>
          <option value="17">5 PM</option>
        </select>
      </div>

      <!-- Search -->
      <div class="col-span-2">
        <label for="filterSearchInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Search</label>
        <input
          id="filterSearchInput"
          type="search"
          placeholder="Search events..."
          class="search-input w-full"
        />
      </div>

      <!-- Buttons -->
      <div class="col-span-2 flex items-end gap-2">
        <button id="applyFilters" class="px-4 py-2 bg-cardiff-red text-cardiff-white rounded-md hover:bg-cardiff-black text-sm">
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
