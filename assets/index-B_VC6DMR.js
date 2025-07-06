(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(a){if(a.ep)return;a.ep=!0;const t=e(a);fetch(a.href,t)}})();function L(o){const i=Array.from(new Set(o.map(t=>t.name?.trim()).filter(Boolean))).sort(),e=new Set;o.forEach(t=>{t.programs?.forEach(s=>{const c=s.location?.title;c&&e.add(c)})});const a=Array.from(e).sort().map(t=>`<option value="${t}">${t}</option>`).join("");return`
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
  `}const v="/CUOpenDayTest/cu-logo.svg";function $(o,i=null){if(i!=null){const e=o.find(t=>t.id===i);if(!e)return"";const n=e.description||"No description available.",a=(e.programs||[]).map(t=>{if(!t?.title)return"";const s=t.start_time?new Date(t.start_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"",c=t.end_time?new Date(t.end_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"",l=t.room||"-",d=t.location?.title||"-",u=t.topicImage||e.cover_image||"",p=[t.location?.accessible?'<span class="material-symbols-outlined text-blue-600">accessible</span>':"",t.location?.parking?'<span class="material-symbols-outlined text-yellow-600">local_parking</span>':"",t.location?.bike_parking?'<span class="material-symbols-outlined text-green-600">directions_bike</span>':""].join(" ");return`
        <article class="event-card">
          ${u?`<img src="${u}" alt="Cover image" class="event-card-image" />`:""}
          <h3 class="event-card-title">${t.title}</h3>
          <p class="event-card-meta">${s}${c?` - ${c}`:""}</p>
          <p class="event-card-meta">${d}, ${l}</p>
          <p class="event-card-meta">${p}</p>
          <p class="event-card-desc">${t.description||t.description_short||"No description available."}</p>
        </article>
      `}).join("");return`
      <div class="col-span-full">
        <div class="event-topic-header">
          <button class="btn-secondary" data-back>
            ← Back to Topics
          </button>
          <h2 class="event-topic-title">${e.name}</h2>
          <p class="event-topic-description">${n}</p>
        </div>
        <div class="event-grid">
          ${a||'<p class="text-sm italic">No events listed.</p>'}
        </div>
      </div>
    `}return o.map(e=>{const n=e.cover_image||v,a=e.description||"No description available.";return`
      <article class="topic-card">
        <img src="${n}" alt="Cover for ${e.name}" class="topic-card-image" />
        <h2 class="topic-card-title">${e.name}</h2>
        <p class="topic-card-desc">${a}</p>
        <button class="btn-primary mt-auto" data-open-id="${e.id}">
          View Events
        </button>
      </article>
    `}).join("")}function E(o){return o.length===0?'<p class="text-gray-600 dark:text-gray-400">No events found.</p>':`
    <div class="flex flex-col gap-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      ${[...o].sort((e,n)=>new Date(e.start_time).getTime()-new Date(n.start_time).getTime()).map(e=>{const n=e.start_time?new Date(e.start_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"",a=e.room||"-",t=e.location?.title||"-",s=e.topicName||"",c=e.topicImage||"",l=[e.location?.accessible?'<span class="material-symbols-outlined text-blue-600">accessible</span>':"",e.location?.parking?'<span class="material-symbols-outlined text-yellow-600">local_parking</span>':"",e.location?.bike_parking?'<span class="material-symbols-outlined text-green-600">directions_bike</span>':""].join(" "),d=`
            <div class="mt-2 text-sm text-gray-700 dark:text-gray-300 hidden" id="details-${e.id}">
              ${c?`<img src="${c}" alt="Image for ${e.title} in ${s}" class="h-32 w-full object-cover rounded mb-2">`:""}
              <p><strong>Description:</strong> ${e.description||"No description available."}</p>
              <p><strong>Start:</strong> ${new Date(e.start_time).toLocaleString()}</p>
              <p><strong>End:</strong> ${new Date(e.end_time).toLocaleString()}</p>
            </div>
          `;return`
            <div class="flex flex-col sm:flex-row bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition rounded-md shadow-sm overflow-hidden">
              <div class="w-24 flex-shrink-0 bg-cardiff-red text-white flex items-center justify-center text-sm sm:text-base font-bold p-2">
                ${n}
              </div>
              <div class="flex-1 p-4 flex flex-col gap-1 sm:max-w-3xl md:max-w-4xl lg:max-w-5xl">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="text-base sm:text-lg font-semibold text-cardiff-dark dark:text-white">${e.title}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">${s}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      ${t}${`, ${a}`} ${l}
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
                ${d}
              </div>
            </div>
          `}).join("")}
    </div>
  `}function F(o,i){const e=document.getElementById("topicFilter").value,n=document.getElementById("locationFilter").value,a=document.getElementById("accessibilityFilter").value,t=document.getElementById("timeFilter").value,s=document.getElementById("filterSearchInput").value.toLowerCase();return(o.topics||[]).map(l=>{const d=(l.programs||[]).filter(r=>{const f=r.location,y=f?.title===n,h=a==="wheelchair"&&f?.accessible==1||a==="parking"&&f?.parking==1||a==="bike_parking"&&f?.bike_parking==1,w=!t||new Date(r.start_time).getHours()>=parseInt(t.split(":")[0]),k=!s||r.title?.toLowerCase().includes(s)||r.description?.toLowerCase().includes(s)||r.description_short?.toLowerCase().includes(s);return(!n||y)&&(!a||h)&&(!t||w)&&(!s||k)}),u=!e||l.name===e,p=l.name?.toLowerCase().includes(i)||l.description?.toLowerCase().includes(i)||l.description_short?.toLowerCase().includes(i)||d.some(Boolean);return u&&p&&d.length>0?{...l,programs:d}:null}).filter(Boolean)}function S(o){return document.getElementById("topicFilter").value="",document.getElementById("locationFilter").value="",document.getElementById("accessibilityFilter").value="",document.getElementById("timeFilter").value="",document.getElementById("filterSearchInput").value="",o.topics.filter(i=>(i.programs||[]).length>0)}let _="",x=!1,m=null,b=[];function I(o){b=o}function B(){const o=document.getElementById("applyFilters"),i=document.getElementById("clearFilters"),e=document.getElementById("toggleView");o?.addEventListener("click",C),i?.addEventListener("click",D),e?.addEventListener("click",()=>{x=!x,m=null,g();const n=e.querySelector("span");n&&(n.textContent=x?"grid_view":"menu_book")})}function C(){const o=window.openDayData;b=F(o,_.toLowerCase()),m=null,g()}function D(){const o=window.openDayData;b=S(o),m=null,g()}function g(){const o=document.getElementById("cardsContainer"),i=m!=null?b.filter(e=>e.id===m):b;if(x&&m==null){o.className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8";const e=i.flatMap(n=>n.programs.map(a=>({...a,topic_id:n.id,topicName:n.name,topicDescription:n.description,topicImage:n.cover_image})));o.innerHTML=E(e),document.querySelectorAll("[data-open-id]")?.forEach(n=>{n.addEventListener("click",()=>{m=parseInt(n.getAttribute("data-open-id")),g()})})}else o.className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8",o.innerHTML=$(i,m),document.querySelectorAll("[data-open-id]")?.forEach(e=>{e.addEventListener("click",()=>{m=parseInt(e.getAttribute("data-open-id")),g()})}),document.querySelector("[data-back]")?.addEventListener("click",()=>{m=null,g()})}function T(o,i,e){const n=document.querySelector("#app"),a=i.toLowerCase(),t=(o.topics||[]).filter(s=>{const c=s.name?.toLowerCase()||"",l=s.description?.toLowerCase()||"",d=s.description_short?.toLowerCase()||"",u=c.includes(a)||l.includes(a)||d.includes(a),p=(s.programs||[]).some(r=>{const f=r?.title?.toLowerCase()||"",y=r?.room?.toLowerCase()||"";return f.includes(a)||y.includes(a)});return u||p});e(t),n.innerHTML=`
   <main class="min-h-screen bg-cardiff-white dark:bg-gray-900 text-cardiff-dark dark:text-white font-sans transition-colors">
    
   <div class="title-container">

        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${v}" alt="Cardiff University Logo" class="h-16 w-auto mx-auto" />
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
  `,B(),g()}function A(){const o=document.createElement("header");o.className="header",o.innerHTML=`
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
  `,document.getElementById("header")?.appendChild(o);const e=document.documentElement,n=document.getElementById("toggleDark"),a=document.getElementById("darkIcon"),t=window.matchMedia("(prefers-color-scheme: dark)").matches,s=localStorage.theme??(t?"dark":"light");e.classList.toggle("dark",s==="dark"),a.textContent=s==="dark"?"light_mode":"dark_mode",n.addEventListener("click",()=>{const r=e.classList.toggle("dark");localStorage.theme=r?"dark":"light",a.textContent=r?"light_mode":"dark_mode"});let l=parseFloat(localStorage.fontSize)||16;e.style.fontSize=`${l}px`;const d=r=>{l=Math.max(12,Math.min(24,l+r)),e.style.fontSize=`${l}px`,localStorage.fontSize=l},u=document.getElementById("increaseFont"),p=document.getElementById("decreaseFont");u.addEventListener("click",()=>d(6)),p.addEventListener("click",()=>d(-6))}async function M(){const e=await(await fetch("/CUOpenDayTest/api/OpenDay.json")).json();return window.openDayData=e,e}A();M().then(o=>T(o,"",I)).catch(o=>{document.getElementById("app").innerHTML='<p class="text-red-600 p-4">Failed to load data.</p>',console.error(o)});
