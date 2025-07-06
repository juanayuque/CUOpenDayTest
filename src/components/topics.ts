import cuLogo from '/cu-logo.svg'

export function renderCards(topics: any[], expandedTopicId: number | null = null) {
  if (expandedTopicId != null) {
    const topic = topics.find(t => t.id === expandedTopicId)
    if (!topic) return ''

    const description = topic.description || 'No description available.'

    const eventCards = (topic.programs || []).map((prog: any) => {
      if (!prog?.title) return ''
      const start = prog.start_time
        ? new Date(prog.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        : ''
      const end = prog.end_time
        ? new Date(prog.end_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        : ''
      const room = prog.room || '-'
      const location = prog.location?.title || '-'
      const image = prog.topicImage || topic.cover_image || ''
      const icons = [
        prog.location?.accessible ? '<span class="material-symbols-outlined text-blue-600">accessible</span>' : '',
        prog.location?.parking ? '<span class="material-symbols-outlined text-yellow-600">local_parking</span>' : '',
        prog.location?.bike_parking ? '<span class="material-symbols-outlined text-green-600">directions_bike</span>' : ''
      ].join(' ')

      return `
        <article class="event-card">
          ${image ? `<img src="${image}" alt="Cover image" class="event-card-image" />` : ''}
          <h3 class="event-card-title">${prog.title}</h3>
          <p class="event-card-meta">${start}${end ? ` - ${end}` : ''}</p>
          <p class="event-card-meta">${location}, ${room}</p>
          <p class="event-card-meta">${icons}</p>
          <p class="event-card-desc">${prog.description || prog.description_short || 'No description available.'}</p>
        </article>
      `
    }).join('')

    return `
      <div class="col-span-full">
        <div class="event-topic-header">
          <button class="btn-secondary" data-back>
            ← Back to Topics
          </button>
          <h2 class="event-topic-title">${topic.name}</h2>
          <p class="event-topic-description">${description}</p>
        </div>
        <div class="event-grid">
          ${eventCards || '<p class="text-sm italic">No events listed.</p>'}
        </div>
      </div>
    `
  }

  // Default: collapsed view
  return topics.map((topic: any) => {
    const image = topic.cover_image || cuLogo
    const description = topic.description || 'No description available.'

    return `
      <article class="topic-card">
        <img src="${image}" alt="Cover for ${topic.name}" class="topic-card-image" />
        <h2 class="topic-card-title">${topic.name}</h2>
        <p class="topic-card-desc">${description}</p>
        <button class="btn-primary mt-auto" data-open-id="${topic.id}">
          View Events
        </button>
      </article>
    `
  }).join('')
}
