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
      const image = topic.cover_image || ''

      return `
        <article>
          ${image ? `<img src="${image}" alt="Cover image" />` : ''}
          <h3>${prog.title}</h3>
          <p>${start}${end ? ` - ${end}` : ''}</p>
          <p>${location}, ${room}</p>
          <p>${prog.description || prog.description_short || 'No description available.'}</p>
        </article>
      `
    }).join('')

    return `
      <div>
        <div>
          <button data-back>← Back to Topics</button>
          <h2>${topic.name}</h2>
          <p>${description}</p>
        </div>
        <div>
          ${eventCards || '<p>No events listed.</p>'}
        </div>
      </div>
    `
  }

  // Default: collapsed view
  return topics.map((topic: any) => {
    const image = topic.cover_image || cuLogo
    const description = topic.description || 'No description available.'

    return `
      <article>
        <img src="${image}" alt="Cover for ${topic.name}" />
        <h2>${topic.name}</h2>
        <p>${description}</p>
        <button data-open-id="${topic.id}">View Events</button>
      </article>
    `
  }).join('')
}
