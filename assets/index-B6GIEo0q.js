(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(a){if(a.ep)return;a.ep=!0;const t=e(a);fetch(a.href,t)}})();function L(o){const i=Array.from(new Set(o.map(t=>t.name?.trim()).filter(Boolean))).sort(),e=new Set;o.forEach(t=>{t.programs?.forEach(n=>{const l=n.location?.title;l&&e.add(l)})});const a=Array.from(e).sort().map(t=>`<option value="${t}">${t}</option>`).join("");return`
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-12 gap-4 items-end mb-6">

      <!-- Topics -->
      <div class="col-span-2">
        <label for="topicFilter" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Topics</label>
        <select id="topicFilter" class="w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white shadow-sm focus:ring-blue-500 focus:border-blue-500">
          <option value="">All</option>
          ${i.map(t=>`<option value="${t}">${t}</option>`).join("")}
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
          ${a}
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
  `}const y="/CUOpenDayTest/cu-logo.svg";function $(o,i=null){if(i!=null){const e=o.find(t=>t.id===i);if(!e)return"";const s=e.description||"No description available.",a=(e.programs||[]).map(t=>{if(!t?.title)return"";const n=t.start_time?new Date(t.start_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"",l=t.end_time?new Date(t.end_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"",r=t.room||"-",d=t.location?.title||"-",p=t.topicImage||e.cover_image||"",f=[t.location?.accessible?'<span class="material-symbols-outlined text-blue-600">accessible</span>':"",t.location?.parking?'<span class="material-symbols-outlined text-yellow-600">local_parking</span>':"",t.location?.bike_parking?'<span class="material-symbols-outlined text-green-600">directions_bike</span>':""].join(" ");return`
        <article class="event-card">
          ${p?`<img src="${p}" alt="Cover image" class="event-card-image" />`:""}
          <h3 class="event-card-title">${t.title}</h3>
          <p class="event-card-meta">${n}${l?` - ${l}`:""}</p>
          <p class="event-card-meta">${d}, ${r}</p>
          <p class="event-card-meta">${f}</p>
          <p class="event-card-desc">${t.description||t.description_short||"No description available."}</p>
        </article>
      `}).join("");return`
      <div class="col-span-full">
        <div class="event-topic-header">
          <button class="btn-secondary" data-back>
            ← Back to Topics
          </button>
          <h2 class="event-topic-title">${e.name}</h2>
          <p class="event-topic-description">${s}</p>
        </div>
        <div class="event-grid">
          ${a||'<p class="text-sm italic">No events listed.</p>'}
        </div>
      </div>
    `}return o.map(e=>{const s=e.cover_image||y,a=e.description||"No description available.";return`
      <article class="topic-card">
        <img src="${s}" alt="Cover for ${e.name}" class="topic-card-image" />
        <h2 class="topic-card-title">${e.name}</h2>
        <p class="topic-card-desc">${a}</p>
        <button class="btn-primary mt-auto" data-open-id="${e.id}">
          View Events
        </button>
      </article>
    `}).join("")}function _(o){return o.length===0?'<p class="text-gray-600 dark:text-gray-400">No events found.</p>':`
    <div class="flex flex-col gap-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      ${[...o].sort((e,s)=>new Date(e.start_time).getTime()-new Date(s.start_time).getTime()).map(e=>{const s=e.start_time?new Date(e.start_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"",a=e.room||"-",t=e.location?.title||"-",n=e.topicName||"",l=e.topicImage||"",r=[e.location?.accessible?'<span class="material-symbols-outlined text-blue-600">accessible</span>':"",e.location?.parking?'<span class="material-symbols-outlined text-yellow-600">local_parking</span>':"",e.location?.bike_parking?'<span class="material-symbols-outlined text-green-600">directions_bike</span>':""].join(" "),d=`
            <div class="mt-2 text-sm text-gray-700 dark:text-gray-300 hidden" id="details-${e.id}">
              ${l?`<img src="${l}" alt="Cover image" class="h-32 w-full object-cover rounded mb-2">`:""}
              <p><strong>Description:</strong> ${e.description||"No description available."}</p>
              <p><strong>Start:</strong> ${new Date(e.start_time).toLocaleString()}</p>
              <p><strong>End:</strong> ${new Date(e.end_time).toLocaleString()}</p>
            </div>
          `;return`
            <div class="flex flex-col sm:flex-row bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition rounded-md shadow-sm overflow-hidden">
              <div class="w-24 flex-shrink-0 bg-cardiff-red text-white flex items-center justify-center text-sm sm:text-base font-bold p-2">
                ${s}
              </div>
              <div class="flex-1 p-4 flex flex-col gap-1 sm:max-w-3xl md:max-w-4xl lg:max-w-5xl">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="text-base sm:text-lg font-semibold text-cardiff-dark dark:text-white">${e.title}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">${n}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      ${t}${`, ${a}`} ${r}
                    </p>
                  </div>
                  <button class="text-gray-500 hover:text-blue-600 text-xl" title="Expand Details" onclick="
                    const el = document.getElementById('details-${e.id}');
                    if (el) el.classList.toggle('hidden');
                  ">
                    <span class="material-symbols-outlined">unfold_more</span>
                  </button>
                </div>
                ${d}
              </div>
            </div>
          `}).join("")}
    </div>
  `}function C(o,i){const e=document.getElementById("topicFilter").value,s=document.getElementById("locationFilter").value,a=document.getElementById("accessibilityFilter").value,t=document.getElementById("timeFilter").value,n=document.getElementById("filterSearchInput").value.toLowerCase();return(o.topics||[]).map(r=>{const d=(r.programs||[]).filter(m=>{const g=m.location,v=g?.title===s,h=a==="wheelchair"&&g?.accessible==1||a==="parking"&&g?.parking==1||a==="bike_parking"&&g?.bike_parking==1,w=!t||new Date(m.start_time).getHours()>=parseInt(t.split(":")[0]),k=!n||m.title?.toLowerCase().includes(n)||m.description?.toLowerCase().includes(n)||m.description_short?.toLowerCase().includes(n);return(!s||v)&&(!a||h)&&(!t||w)&&(!n||k)}),p=!e||r.name===e,f=r.name?.toLowerCase().includes(i)||r.description?.toLowerCase().includes(i)||r.description_short?.toLowerCase().includes(i)||d.some(Boolean);return p&&f&&d.length>0?{...r,programs:d}:null}).filter(Boolean)}function E(o){return document.getElementById("topicFilter").value="",document.getElementById("locationFilter").value="",document.getElementById("accessibilityFilter").value="",document.getElementById("timeFilter").value="",document.getElementById("filterSearchInput").value="",o.topics.filter(i=>(i.programs||[]).length>0)}let I="",b=!1,c=null,x=[];function D(o){x=o}function F(){const o=document.getElementById("applyFilters"),i=document.getElementById("clearFilters"),e=document.getElementById("toggleView");o?.addEventListener("click",B),i?.addEventListener("click",T),e?.addEventListener("click",()=>{b=!b,c=null,u();const s=e.querySelector("span");s&&(s.textContent=b?"grid_view":"menu_book")})}function B(){const o=window.openDayData;x=C(o,I.toLowerCase()),c=null,u()}function T(){const o=window.openDayData;x=E(o),c=null,u()}function u(){const o=document.getElementById("cardsContainer"),i=c!=null?x.filter(e=>e.id===c):x;if(b&&c==null){o.className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8";const e=i.flatMap(s=>s.programs.map(a=>({...a,topic_id:s.id,topicName:s.name,topicDescription:s.description,topicImage:s.cover_image})));o.innerHTML=_(e),document.querySelectorAll("[data-open-id]")?.forEach(s=>{s.addEventListener("click",()=>{c=parseInt(s.getAttribute("data-open-id")),u()})})}else o.className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8",o.innerHTML=$(i,c),document.querySelectorAll("[data-open-id]")?.forEach(e=>{e.addEventListener("click",()=>{c=parseInt(e.getAttribute("data-open-id")),u()})}),document.querySelector("[data-back]")?.addEventListener("click",()=>{c=null,u()})}function S(o,i,e){const s=document.querySelector("#app"),a=i.toLowerCase(),t=(o.topics||[]).filter(n=>{const l=n.name?.toLowerCase()||"",r=n.description?.toLowerCase()||"",d=n.description_short?.toLowerCase()||"",p=l.includes(a)||r.includes(a)||d.includes(a),f=(n.programs||[]).some(m=>{const g=m?.title?.toLowerCase()||"",v=m?.room?.toLowerCase()||"";return g.includes(a)||v.includes(a)});return p||f});e(t),s.innerHTML=`
   <main class="min-h-screen bg-cardiff-white dark:bg-gray-900 text-cardiff-dark dark:text-white font-sans transition-colors">
    
   <div class="title-container">

        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${y}" alt="Cardiff University Logo" class="h-16 w-auto mx-auto" />
        </a>
        
        <h1 class="text-4xl font-bold mb-2">Cardiff University Open Day</h1>

        <p class="text-lg text-cardiff-grey dark:text-gray-300 max-w-2xl mx-auto">
          Browse upcoming sessions and explore events to plan your visit.
        </p>

    </div>

    <div id="filtersContainer">
    ${L(o.topics||[])}
    </div>

    <section id="cardsContainer" class="bg-cardiff-grey rounded-lg shadow p-6 flex flex-col">
    </section>
    
    </main>
  `,F(),u()}function A(){const o=document.createElement("header");o.className="header",o.innerHTML=`
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap justify-between items-center h-auto gap-2 py-2">
        
        <!-- Logo and Title -->
        <div class="flex items-center gap-2 min-w-0">
          <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${y}" alt="Cardiff University Logo" class="h-8 w-auto flex-shrink-0" />
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
  `,document.getElementById("header")?.appendChild(o);const e=document.documentElement,s=document.getElementById("toggleDark"),a=document.getElementById("darkIcon"),t=window.matchMedia("(prefers-color-scheme: dark)").matches,n=localStorage.theme??(t?"dark":"light");e.classList.toggle("dark",n==="dark"),a.textContent=n==="dark"?"light_mode":"dark_mode",s.addEventListener("click",()=>{const l=e.classList.toggle("dark");localStorage.theme=l?"dark":"light",a.textContent=l?"light_mode":"dark_mode"})}async function M(){const e=await(await fetch("/CUOpenDayTest/api/OpenDay.json")).json();return window.openDayData=e,e}A();M().then(o=>S(o,"",D)).catch(o=>{document.getElementById("app").innerHTML='<p class="text-red-600 p-4">Failed to load data.</p>',console.error(o)});
