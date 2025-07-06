// Utility to fetch and display Open Day data from public/OpenDay14.json
import './style.css'
import { renderHomePage } from './components/home'
import { setFilteredTopics } from './components/interactions'


async function loadOpenDay() {
  // Use the correct base path for GitHub Pages
  const base = import.meta.env.BASE_URL || '/';
  const res = await fetch(`${base}api/OpenDay.json`)
  const data = await res.json()
  ;(window as any).openDayData = data
  return data
}

loadOpenDay()
  .then(data => renderHomePage(data, '', setFilteredTopics)) // the search term starts empty
  .catch(err => {
    document.getElementById('app')!.innerHTML = `<p class="text-red-600 p-4">Failed to load data.</p>`
    console.error(err)
  })
