export function renderListView(programs: any[]) {
  if (programs.length === 0) {
    return `<p class="text-gray-600 dark:text-gray-400">No events found.</p>`
  }

  // Sort programs by start_time ascending
  const sortedPrograms = [...programs].sort(
    (a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
  )

  return `
    <div class="flex flex-col gap-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      ${sortedPrograms
        .map((prog: any) => {
          const start = prog.start_time
            ? new Date(prog.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            : ''
          const room = prog.room || '-'
          const location = prog.location?.title || '-'
          const topic = prog.topicName || ''
          const image = prog.topicImage || ''
          const icons = [
            prog.location?.accessible ? '<span class="material-symbols-outlined text-blue-600">accessible</span>' : '',
            prog.location?.parking ? '<span class="material-symbols-outlined text-yellow-600">local_parking</span>' : '',
            prog.location?.bike_parking ? '<span class="material-symbols-outlined text-green-600">directions_bike</span>' : ''
          ].join(' ')

          const expandedDetails = `
            <div class="mt-2 text-sm text-gray-700 dark:text-gray-300 hidden" id="details-${prog.id}">
              ${image ? `<img src="${image}" alt="Cover image" class="h-32 w-full object-cover rounded mb-2">` : ''}
              <p><strong>Description:</strong> ${prog.description || 'No description available.'}</p>
              <p><strong>Start:</strong> ${new Date(prog.start_time).toLocaleString()}</p>
              <p><strong>End:</strong> ${new Date(prog.end_time).toLocaleString()}</p>
            </div>
          `

          return `
            <div class="flex flex-col sm:flex-row bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition rounded-md shadow-sm overflow-hidden">
              <div class="w-24 flex-shrink-0 bg-cardiff-red text-white flex items-center justify-center text-sm sm:text-base font-bold p-2">
                ${start}
              </div>
              <div class="flex-1 p-4 flex flex-col gap-1 sm:max-w-3xl md:max-w-4xl lg:max-w-5xl">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="text-base sm:text-lg font-semibold text-cardiff-dark dark:text-white">${prog.title}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">${topic}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      ${location}${room ? `, ${room}` : ''} ${icons}
                    </p>
                  </div>
                  <button class="text-gray-500 hover:text-blue-600 text-xl" title="Expand Details" onclick="
                    const el = document.getElementById('details-${prog.id}');
                    if (el) el.classList.toggle('hidden');
                  ">
                    <span class="material-symbols-outlined">unfold_more</span>
                  </button>
                </div>
                ${expandedDetails}
              </div>
            </div>
          `
        })
        .join('')}
    </div>
  `
}
