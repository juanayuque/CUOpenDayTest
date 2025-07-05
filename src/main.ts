// Utility to fetch and display Open Day data from public/OpenDay14.json
import './style.css'
import { renderHomePage } from './components/home'

async function loadOpenDay() {
  // Use the correct base path for GitHub Pages
  const base = import.meta.env.BASE_URL || '/';
  const res = await fetch(`${base}api/OpenDay.json`)
  const data = await res.json()
  return data
}

loadOpenDay().then(renderHomePage)
