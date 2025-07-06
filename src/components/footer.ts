export function renderFooter() {
  const footer = document.createElement('footer')
  footer.className = "footer"

  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
    <p class="mb-4 text-center text-sm sm:text-base">
        Designed, Developed and Implemented by Juan Ayuque, 2025.
      </p>

<div class="flex justify-center gap-6 text-lg">
  <a href="mailto:juanayuque@gmail.com" class="hover:text-cardiff-red" target="_blank" rel="noopener noreferrer" title="Gmail">
    <span class="material-symbols-outlined align-middle text-2xl">mail</span>
  </a>
  <a href="https://www.linkedin.com/in/juanayuque" class="hover:text-cardiff-red" target="_blank" rel="noopener noreferrer" title="LinkedIn">
    <span class="material-symbols-outlined align-middle text-2xl">work</span>
  </a>
  <a href="https://github.com/juanayuque" class="hover:text-cardiff-red" target="_blank" rel="noopener noreferrer" title="GitHub">
    <span class="material-symbols-outlined align-middle text-2xl">code</span>
  </a>
</div>

    </div>
  `

  document.body.appendChild(footer)
}
