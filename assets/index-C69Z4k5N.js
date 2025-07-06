(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=e(s);fetch(s.href,t)}})();function y(a){const o=Array.from(new Set(a.map(t=>t.name?.trim()).filter(Boolean))).sort(),e=new Set;a.forEach(t=>{t.programs?.forEach(n=>{const c=n.location?.title;c&&e.add(c)})});const s=Array.from(e).sort().map(t=>`<option value="${t}">${t}</option>`).join("");return`
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-12 gap-4 items-end mb-6">

      <!-- Topics -->
      <div class="col-span-2 sm:col-span-3 md:col-span-2">
        <label for="topicFilter" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Topics</label>
        <select id="topicFilter" class="w-full form-select">
          <option value="">All</option>
          ${o.map(t=>`<option value="${t}">${t}</option>`).join("")}
        </select>
      </div>

      <!-- Accessibility -->
      <div class="col-span-2 sm:col-span-3 md:col-span-2">
        <label for="accessibilityFilter" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Accessibility</label>
        <select id="accessibilityFilter" class="w-full form-select">
          <option value="">No requirements</option>
          <option value="wheelchair">Wheelchair Accessible</option>
          <option value="bike_parking">Bike Parking</option> 
          <option value="parking">Car Parking</option>      
        </select>
      </div>

      <!-- Location -->
      <div class="col-span-2 sm:col-span-3 md:col-span-2">
        <label for="locationFilter" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
        <select id="locationFilter" class="w-full form-select">
          <option value="">All</option>
          ${s}
        </select>
      </div>

      <!-- After -->
      <div class="col-span-2 sm:col-span-3 md:col-span-2">
        <label for="timeFilter" class="block text-sm font-medium text-gray-700 dark:text-gray-300">After</label>
        <select id="timeFilter" class="w-full form-select">
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
      <div class="col-span-2 sm:col-span-3 md:col-span-2">
        <label for="filterSearchInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Search</label>
        <input
          id="filterSearchInput"
          type="search"
          placeholder="Search events..."
          class="form-input w-full"
        />
      </div>

      <!-- Buttons -->
      <div class="col-span-2 sm:col-span-3 md:col-span-2 flex items-end gap-2">
        <button id="applyFilters" class="px-3 py-1 bg-cardiff-red text-white rounded-md hover:bg-cardiff-black text-sm">
          Apply
        </button>
        <button id="clearFilters" class="icon2-button" title="Clear Filters">
          <span class="material-symbols-outlined">cleaning_services</span>
        </button>
        <button class="icon2-button toggle-view-btn" title="Toggle View">
          <span class="material-symbols-outlined">menu_book</span>
        </button>
      </div>
    </div>
  </div>
  `}const h="/CUOpenDayTest/cu-logo.svg";function E(a,o=null){if(o!=null){const e=a.find(t=>t.id===o);if(!e)return"";const i=e.description||"No description available.",s=(e.programs||[]).map(t=>{if(!t?.title)return"";const n=t.start_time?new Date(t.start_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"",c=t.end_time?new Date(t.end_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"",l=t.room||"-",r=t.location?.title||"-",p=t.topicImage||e.cover_image||"",u=[t.location?.accessible?'<span class="material-symbols-outlined text-blue-600">accessible</span>':"",t.location?.parking?'<span class="material-symbols-outlined text-yellow-600">local_parking</span>':"",t.location?.bike_parking?'<span class="material-symbols-outlined text-green-600">directions_bike</span>':""].join(" ");return`
        <article class="event-card">
          ${p?`<img src="${p}" alt="Cover image" class="event-card-image" />`:""}
          <h3 class="event-card-title">${t.title}</h3>
          <p class="event-card-meta">${n}${c?` - ${c}`:""}</p>
          <p class="event-card-meta">${r}, ${l}</p>
          <p class="event-card-meta">${u}</p>
          <p class="event-card-desc">${t.description||t.description_short||"No description available."}</p>
        </article>
      `}).join("");return`
      <div class="col-span-full">
        <div class="event-topic-header">
          <button class="btn-secondary" data-back>
            ← Back to Topics
          </button>
          <h2 class="event-topic-title">${e.name}</h2>
          <p class="event-topic-description">${i}</p>
        </div>
        <div class="event-grid">
          ${s||'<p class="text-sm italic">No events listed.</p>'}
        </div>
      </div>
    `}return a.map(e=>{const i=e.cover_image||h,s=e.description||"No description available.";return`
      <article class="topic-card">
        <img src="${i}" alt="Cover for ${e.name}" class="topic-card-image" />
        <h2 class="topic-card-title">${e.name}</h2>
        <p class="topic-card-desc">${s}</p>
        <button class="btn-primary mt-auto" data-open-id="${e.id}">
          View Events
        </button>
      </article>
    `}).join("")}function F(a){return a.length===0?'<p class="text-gray-600 dark:text-gray-400">No events found.</p>':`
    <div class="flex flex-col gap-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      ${[...a].sort((e,i)=>new Date(e.start_time).getTime()-new Date(i.start_time).getTime()).map(e=>{const i=e.start_time?new Date(e.start_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"",s=e.room||"-",t=e.location?.title||"-",n=e.topicName||"",c=e.topicImage||"",l=[e.location?.accessible?'<span class="material-symbols-outlined text-blue-600">accessible</span>':"",e.location?.parking?'<span class="material-symbols-outlined text-yellow-600">local_parking</span>':"",e.location?.bike_parking?'<span class="material-symbols-outlined text-green-600">directions_bike</span>':""].join(" "),r=`
            <div class="mt-2 text-sm text-gray-700 dark:text-gray-300 hidden" id="details-${e.id}">
              ${c?`<img src="${c}" alt="Image for ${e.title} in ${n}" class="h-32 w-full object-cover rounded mb-2">`:""}
              <p><strong>Description:</strong> ${e.description||"No description available."}</p>
              <p><strong>Start:</strong> ${new Date(e.start_time).toLocaleString()}</p>
              <p><strong>End:</strong> ${new Date(e.end_time).toLocaleString()}</p>
            </div>
          `;return`
            <div class="flex flex-col sm:flex-row bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition rounded-md shadow-sm overflow-hidden">
              <div class="w-24 flex-shrink-0 bg-cardiff-red text-white flex items-center justify-center text-sm sm:text-base font-bold p-2">
                ${i}
              </div>
              <div class="flex-1 p-4 flex flex-col gap-1 sm:max-w-3xl md:max-w-4xl lg:max-w-5xl">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="text-base sm:text-lg font-semibold text-cardiff-dark dark:text-white">${e.title}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">${n}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      ${t}${`, ${s}`} ${l}
                    </p>
                  </div>
                  <button   class="ml-auto text-cardiff-blue hover:text-blue-600 hover:bg-cardiff-gray dark:hover:bg-cardiff-white text-xl rounded-full p-2"

                  
                  title="Expand Details" onclick="
                    const el = document.getElementById('details-${e.id}');
                    if (el) el.classList.toggle('hidden');
                  ">
                    <span class="material-symbols-outlined">unfold_more</span>
                  </button>
                </div>
                ${r}
              </div>
            </div>
          `}).join("")}
    </div>
  `}function $(a,o){const e=document.getElementById("topicFilter").value,i=document.getElementById("locationFilter").value,s=document.getElementById("accessibilityFilter").value,t=document.getElementById("timeFilter").value,n=document.getElementById("filterSearchInput").value.toLowerCase();return(a.topics||[]).map(l=>{const r=(l.programs||[]).filter(d=>{const f=d.location,v=f?.title===i,w=s==="wheelchair"&&f?.accessible==1||s==="parking"&&f?.parking==1||s==="bike_parking"&&f?.bike_parking==1,k=!t||new Date(d.start_time).getHours()>=parseInt(t.split(":")[0]),L=!n||d.title?.toLowerCase().includes(n)||d.description?.toLowerCase().includes(n)||d.description_short?.toLowerCase().includes(n);return(!i||v)&&(!s||w)&&(!t||k)&&(!n||L)}),p=!e||l.name===e,u=l.name?.toLowerCase().includes(o)||l.description?.toLowerCase().includes(o)||l.description_short?.toLowerCase().includes(o)||r.some(Boolean);return p&&u&&r.length>0?{...l,programs:r}:null}).filter(Boolean)}function _(a){return document.getElementById("topicFilter").value="",document.getElementById("locationFilter").value="",document.getElementById("accessibilityFilter").value="",document.getElementById("timeFilter").value="",document.getElementById("filterSearchInput").value="",a.topics.filter(o=>(o.programs||[]).length>0)}let I="",x=!1,m=null,b=[];function S(a){b=a}function B(){const a=document.getElementById("applyFilters"),o=document.getElementById("clearFilters");document.querySelectorAll(".toggle-view-btn").forEach(i=>{i.addEventListener("click",()=>{x=!x,m=null,g();const s=i.querySelector("span");s&&(s.textContent=x?"grid_view":"menu_book")})}),a?.addEventListener("click",C),o?.addEventListener("click",D)}function C(){const a=window.openDayData;b=$(a,I.toLowerCase()),m=null,g()}function D(){const a=window.openDayData;b=_(a),m=null,g()}function g(){const a=document.getElementById("cardsContainer"),o=m!=null?b.filter(e=>e.id===m):b;if(x&&m==null){a.className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8";const e=o.flatMap(i=>i.programs.map(s=>({...s,topic_id:i.id,topicName:i.name,topicDescription:i.description,topicImage:i.cover_image})));a.innerHTML=F(e),document.querySelectorAll("[data-open-id]")?.forEach(i=>{i.addEventListener("click",()=>{m=parseInt(i.getAttribute("data-open-id")),g()})})}else a.className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8",a.innerHTML=E(o,m),document.querySelectorAll("[data-open-id]")?.forEach(e=>{e.addEventListener("click",()=>{m=parseInt(e.getAttribute("data-open-id")),g()})}),document.querySelector("[data-back]")?.addEventListener("click",()=>{m=null,g()})}function T(a,o,e){const i=document.querySelector("#app"),s=o.toLowerCase(),t=(a.topics||[]).filter(n=>{const c=n.name?.toLowerCase()||"",l=n.description?.toLowerCase()||"",r=n.description_short?.toLowerCase()||"",p=c.includes(s)||l.includes(s)||r.includes(s),u=(n.programs||[]).some(d=>{const f=d?.title?.toLowerCase()||"",v=d?.room?.toLowerCase()||"";return f.includes(s)||v.includes(s)});return p||u});e(t),i.innerHTML=`
    <main class="min-h-screen bg-cardiff-white dark:bg-gray-900 text-cardiff-dark dark:text-white font-sans transition-colors pb-20">
    
      <div class="title-container">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${h}" alt="Cardiff University Logo" class="h-16 w-auto mx-auto" />
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
            ${y(a.topics||[])}
          </div>
        </div>
      </div>

      <!-- Desktop Filters -->
      <div id="filtersContainer" class="hidden sm:flex">
        ${y(a.topics||[])}
      </div>

      <section id="cardsContainer" class="bg-cardiff-grey rounded-lg shadow p-6 flex flex-col"></section>
    </main>
  `,setTimeout(()=>{const n=document.getElementById("mobile-filter-toggle"),c=document.getElementById("mobile-filter-close"),l=document.getElementById("mobile-filters-panel");n?.addEventListener("click",()=>{l?.classList.remove("hidden")}),c?.addEventListener("click",()=>{l?.classList.add("hidden")}),document.querySelectorAll("#mobileFiltersContainer button").forEach(r=>{r.classList.add("text-sm","px-2","py-1")}),document.querySelectorAll("#mobileFiltersContainer select, #mobileFiltersContainer input").forEach(r=>{r.classList.add("py-1","text-sm")})},0),B(),g()}function A(){const a=document.createElement("header");a.className="header",a.innerHTML=`
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap justify-between items-center h-auto gap-2 py-2">
        
        <!--Title -->

          <span class="truncate text-base sm:text-lg md:text-xl font-bold text-white dark:text-white"> Demo APP </span>

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
  `,document.getElementById("header")?.appendChild(a);const e=document.documentElement,i=document.getElementById("toggleDark"),s=document.getElementById("darkIcon"),t=window.matchMedia("(prefers-color-scheme: dark)").matches,n=localStorage.theme??(t?"dark":"light");e.classList.toggle("dark",n==="dark"),s.textContent=n==="dark"?"light_mode":"dark_mode",i.addEventListener("click",()=>{const d=e.classList.toggle("dark");localStorage.theme=d?"dark":"light",s.textContent=d?"light_mode":"dark_mode"});let l=parseFloat(localStorage.fontSize)||16;e.style.fontSize=`${l}px`;const r=d=>{l=Math.max(12,Math.min(24,l+d)),e.style.fontSize=`${l}px`,localStorage.fontSize=l},p=document.getElementById("increaseFont"),u=document.getElementById("decreaseFont");p.addEventListener("click",()=>r(6)),u.addEventListener("click",()=>r(-6))}function M(){const a=document.createElement("footer");a.className="footer",a.innerHTML=`
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
  `,document.body.appendChild(a)}async function P(){const e=await(await fetch("/CUOpenDayTest/api/OpenDay.json")).json();return window.openDayData=e,e}A();P().then(a=>T(a,"",S)).catch(a=>{document.getElementById("app").innerHTML='<p class="text-red-600 p-4">Failed to load data.</p>',console.error(a)});M();
