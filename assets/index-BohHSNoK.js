(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(i){if(i.ep)return;i.ep=!0;const t=e(i);fetch(i.href,t)}})();function L(a){const s=Array.from(new Set(a.map(t=>t.name?.trim()).filter(Boolean))).sort(),e=new Set;a.forEach(t=>{t.programs?.forEach(n=>{const r=n.location?.title;r&&e.add(r)})});const i=Array.from(e).sort().map(t=>`<option value="${t}">${t}</option>`).join("");return`
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-12 gap-4 items-end mb-6">

      <!-- Topics -->
      <div class="col-span-2">
        <label for="topicFilter" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Topics</label>
        <select id="topicFilter" class="w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white shadow-sm focus:ring-blue-500 focus:border-blue-500">
          <option value="">All</option>
          ${s.map(t=>`<option value="${t}">${t}</option>`).join("")}
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
          ${i}
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
  `}const y="/CUOpenDayTest/cu-logo.svg";function $(a,s=null){if(s!=null){const e=a.find(t=>t.id===s);if(!e)return"";const o=e.description||"No description available.",i=(e.programs||[]).map(t=>{if(!t?.title)return"";const n=t.start_time?new Date(t.start_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"",r=t.end_time?new Date(t.end_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"",l=t.room||"-",d=t.location?.title||"-",p=t.topicImage||e.cover_image||"",f=[t.location?.accessible?'<span class="material-symbols-outlined text-blue-600">accessible</span>':"",t.location?.parking?'<span class="material-symbols-outlined text-yellow-600">local_parking</span>':"",t.location?.bike_parking?'<span class="material-symbols-outlined text-green-600">directions_bike</span>':""].join(" ");return`
        <article class="event-card">
          ${p?`<img src="${p}" alt="Cover image" class="event-card-image" />`:""}
          <h3 class="event-card-title">${t.title}</h3>
          <p class="event-card-meta">${n}${r?` - ${r}`:""}</p>
          <p class="event-card-meta">${d}, ${l}</p>
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
          <p class="event-topic-description">${o}</p>
        </div>
        <div class="event-grid">
          ${i||'<p class="text-sm italic">No events listed.</p>'}
        </div>
      </div>
    `}return a.map(e=>{const o=e.cover_image||y,i=e.description||"No description available.";return`
      <article class="topic-card">
        <img src="${o}" alt="Cover for ${e.name}" class="topic-card-image" />
        <h2 class="topic-card-title">${e.name}</h2>
        <p class="topic-card-desc">${i}</p>
        <button class="btn-primary mt-auto" data-open-id="${e.id}">
          View Events
        </button>
      </article>
    `}).join("")}function _(a){return a.length===0?'<p class="text-gray-600 dark:text-gray-400">No events found.</p>':`
    <div class="flex flex-col gap-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      ${[...a].sort((e,o)=>new Date(e.start_time).getTime()-new Date(o.start_time).getTime()).map(e=>{const o=e.start_time?new Date(e.start_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"",i=e.room||"-",t=e.location?.title||"-",n=e.topicName||"",r=e.topicImage||"",l=[e.location?.accessible?'<span class="material-symbols-outlined text-blue-600">accessible</span>':"",e.location?.parking?'<span class="material-symbols-outlined text-yellow-600">local_parking</span>':"",e.location?.bike_parking?'<span class="material-symbols-outlined text-green-600">directions_bike</span>':""].join(" "),d=`
            <div class="mt-2 text-sm text-gray-700 dark:text-gray-300 hidden" id="details-${e.id}">
              ${r?`<img src="${r}" alt="Cover image" class="h-32 w-full object-cover rounded mb-2">`:""}
              <p><strong>Description:</strong> ${e.description||"No description available."}</p>
              <p><strong>Start:</strong> ${new Date(e.start_time).toLocaleString()}</p>
              <p><strong>End:</strong> ${new Date(e.end_time).toLocaleString()}</p>
            </div>
          `;return`
            <div class="flex flex-col sm:flex-row bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition rounded-md shadow-sm overflow-hidden">
              <div class="w-24 flex-shrink-0 bg-cardiff-red text-white flex items-center justify-center text-sm sm:text-base font-bold p-2">
                ${o}
              </div>
              <div class="flex-1 p-4 flex flex-col gap-1 sm:max-w-3xl md:max-w-4xl lg:max-w-5xl">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="text-base sm:text-lg font-semibold text-cardiff-dark dark:text-white">${e.title}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">${n}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      ${t}${`, ${i}`} ${l}
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
  `}function E(a,s){const e=document.getElementById("topicFilter").value,o=document.getElementById("locationFilter").value,i=document.getElementById("accessibilityFilter").value,t=document.getElementById("timeFilter").value,n=document.getElementById("filterSearchInput").value.toLowerCase();return(a.topics||[]).map(l=>{const d=(l.programs||[]).filter(m=>{const g=m.location,v=g?.title===o,h=i==="wheelchair"&&g?.accessible==1||i==="parking"&&g?.parking==1||i==="bike_parking"&&g?.bike_parking==1,w=!t||new Date(m.start_time).getHours()>=parseInt(t.split(":")[0]),k=!n||m.title?.toLowerCase().includes(n)||m.description?.toLowerCase().includes(n)||m.description_short?.toLowerCase().includes(n);return(!o||v)&&(!i||h)&&(!t||w)&&(!n||k)}),p=!e||l.name===e,f=l.name?.toLowerCase().includes(s)||l.description?.toLowerCase().includes(s)||l.description_short?.toLowerCase().includes(s)||d.some(Boolean);return p&&f&&d.length>0?{...l,programs:d}:null}).filter(Boolean)}function C(a){return document.getElementById("topicFilter").value="",document.getElementById("locationFilter").value="",document.getElementById("accessibilityFilter").value="",document.getElementById("timeFilter").value="",document.getElementById("filterSearchInput").value="",a.topics.filter(s=>(s.programs||[]).length>0)}let F="",x=!1,c=null,b=[];function I(a){b=a}function B(){const a=document.getElementById("applyFilters"),s=document.getElementById("clearFilters"),e=document.getElementById("toggleView");a?.addEventListener("click",T),s?.addEventListener("click",D),e?.addEventListener("click",()=>{x=!x,c=null,u();const o=e.querySelector("span");o&&(o.textContent=x?"grid_view":"menu_book")})}function T(){const a=window.openDayData;b=E(a,F.toLowerCase()),c=null,u()}function D(){const a=window.openDayData;b=C(a),c=null,u()}function u(){const a=document.getElementById("cardsContainer"),s=c!=null?b.filter(e=>e.id===c):b;if(x&&c==null){a.className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8";const e=s.flatMap(o=>o.programs.map(i=>({...i,topic_id:o.id,topicName:o.name,topicDescription:o.description,topicImage:o.cover_image})));a.innerHTML=_(e),document.querySelectorAll("[data-open-id]")?.forEach(o=>{o.addEventListener("click",()=>{c=parseInt(o.getAttribute("data-open-id")),u()})})}else a.className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8",a.innerHTML=$(s,c),document.querySelectorAll("[data-open-id]")?.forEach(e=>{e.addEventListener("click",()=>{c=parseInt(e.getAttribute("data-open-id")),u()})}),document.querySelector("[data-back]")?.addEventListener("click",()=>{c=null,u()})}function S(a,s,e){const o=document.querySelector("#app"),i=s.toLowerCase(),t=(a.topics||[]).filter(n=>{const r=n.name?.toLowerCase()||"",l=n.description?.toLowerCase()||"",d=n.description_short?.toLowerCase()||"",p=r.includes(i)||l.includes(i)||d.includes(i),f=(n.programs||[]).some(m=>{const g=m?.title?.toLowerCase()||"",v=m?.room?.toLowerCase()||"";return g.includes(i)||v.includes(i)});return p||f});e(t),o.innerHTML=`
   <main class="min-h-screen bg-cardiff-white dark:bg-gray-900 text-cardiff-dark dark:text-white font-sans transition-colors">
    
   <div class="title-container">

        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${y}" alt="Cardiff University Logo" class="h-16 w-auto" />
        </a>
        
        <h1 class="text-4xl font-bold mb-2">Cardiff University Open Day</h1>

        <p class="text-lg text-cardiff-grey dark:text-gray-300 max-w-2xl mx-auto">
          Browse upcoming sessions and explore events to plan your visit.
        </p>

    </div>

    <div id="filtersContainer">
    ${L(a.topics||[])}
    </div>

    <section id="cardsContainer" class="bg-cardiff-grey rounded-lg shadow p-6 flex flex-col">
    </section>
    
    </main>
  `,B(),u()}async function A(){const e=await(await fetch("/CUOpenDayTest/api/OpenDay.json")).json();return window.openDayData=e,e}A().then(a=>S(a,"",I)).catch(a=>{document.getElementById("app").innerHTML='<p class="text-red-600 p-4">Failed to load data.</p>',console.error(a)});
