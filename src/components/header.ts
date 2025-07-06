import cuLogo from '/cu-logo.svg'

export function renderHeader() {
  const header = document.createElement('header')
  header.className = "header"

header.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap justify-between items-center h-auto gap-2 py-2">
        
        <!-- Logo and Title -->
        <div class="flex items-center gap-2 min-w-0">
          <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${cuLogo}" alt="Cardiff University Logo" class="h-8 w-auto flex-shrink-0" />
          </a>
          <span class="truncate text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white"> Cardiff University Open Day</span>
        </div>

       

        <!-- Action Buttons -->
        <div class="flex items-center gap-1 flex-shrink-0">
          <!-- Decrease Font Size -->
          <button 
            id="decreaseFont" 
            aria-label="Decrease font size"
            class="icon-button"
          >
            <span class="material-symbols-outlined text-xl">remove</span>
          </button>

          <!-- Increase Font Size -->
          <button 
            id="increaseFont" 
            aria-label="Increase font size"
            class="icon-button"
          >
            <span class="material-symbols-outlined text-xl">add</span>
          </button>

          <!-- Toggle Dark Mode -->
          <button
            id="toggleDark"
            aria-label="Toggle dark mode"
            class="icon-button"
          >
            <span class="material-symbols-outlined text-xl" id="darkIcon">dark_mode</span>
          </button>
        </div>
      </div>
    </div>
  `;
  
  const headerContainer = document.getElementById('header')
  headerContainer?.appendChild(header)

  const html = document.documentElement
  const toggleBtn = document.getElementById('toggleDark')!
  const darkIcon = document.getElementById('darkIcon')!

  const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const savedTheme = localStorage.theme ?? (isSystemDark ? 'dark' : 'light')
  html.classList.toggle('dark', savedTheme === 'dark')
  darkIcon.textContent = savedTheme === 'dark' ? 'light_mode' : 'dark_mode'

  toggleBtn.addEventListener('click', () => {
    const isNowDark = html.classList.toggle('dark')
    localStorage.theme = isNowDark ? 'dark' : 'light'
    darkIcon.textContent = isNowDark ? 'light_mode' : 'dark_mode'
  })

}