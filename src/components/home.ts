import cuLogo from '/cu-logo.svg'


export function renderHomePage(data: any) {
  const app = document.querySelector<HTMLDivElement>('#app')!
  if (!data.topics) {
    app.innerHTML = '<p class="text-red-600">No Open Day data found.</p>'
    return
  }

  app.innerHTML = `
    <div class="demo-banner w-full bg-yellow-300 text-black flex flex-col sm:flex-row items-center justify-between px-4 py-2 mb-6 gap-2 border-b-2 border-yellow-500">
      <div class="font-bold text-lg flex-1 text-center sm:text-left">This is a demo app</div>
      <div class="flex flex-row items-center gap-3 justify-center">
      </div>
    </div>

    <div class="min-h-screen bg-cardiff-white font-sans px-2 py-6">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${cuLogo}" alt="Cardiff University Logo" class="h-16 w-auto" />
        </a>
      </div>
      <h1 class="text-3xl sm:text-5xl font-bold text-cardiff-red mb-8 text-center">Cardiff University Open Day</h1>
      <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        ${data.topics.map((topic: any) => topic && topic.name ? `
          <div class="bg-cardiff-grey rounded-lg shadow p-6 flex flex-col">
            <img src="${topic.cover_image || cuLogo}" alt="${topic.name}" class="h-32 w-full object-cover rounded mb-4" />
            <h2 class="text-xl font-bold text-cardiff-red mb-2">${topic.name}</h2>
            <p class="text-cardiff-dark mb-2">${topic.description || ''}</p>
            ${topic.programs && topic.programs.length ? `
              <div class="mt-2">
                <h3 class="font-semibold text-cardiff-dark mb-1">Events:</h3>
                <ul class="list-disc list-inside text-sm">
                  ${topic.programs.map((prog: any) => prog && prog.title ? `
                    <li>
                      <span class="font-semibold">${prog.title}</span>
                      ${prog.start_time ? ` 
                        <span class='text-xs text-cardiff-dark'>
                          (${new Date(prog.start_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}${prog.end_time ? ' - ' + new Date(prog.end_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : ''})
                        </span>` : ''}
                      ${prog.room ? `, <span class='text-xs'>${prog.room}</span>` : ''}
                    </li>` : '').join('')}
                </ul>
              </div>` : ''}
          </div>` : '').join('')}
      </div>
    </div>
  `
}
