export function applyFilters(data: any, searchTerm: string, container: HTMLElement): any[] {
  const topicVal = (container.querySelector('#topicFilter') as HTMLSelectElement)?.value || ''
  const locationVal = (container.querySelector('#locationFilter') as HTMLSelectElement)?.value || ''
  const accessibilityVal = (container.querySelector('#accessibilityFilter') as HTMLSelectElement)?.value || ''
  const timeVal = (container.querySelector('#timeFilter') as HTMLInputElement)?.value || ''
  const filterSearch = (container.querySelector('#filterSearchInput') as HTMLInputElement)?.value.toLowerCase() || ''

  const filtered = (data.topics || []).map((topic: any) => {
    const matchingPrograms = (topic.programs || []).filter((prog: any) => {
      const loc = prog.location
      const matchesLoc = loc?.title === locationVal
      const matchesAccess =
        (accessibilityVal === 'wheelchair' && loc?.accessible == 1) ||
        (accessibilityVal === 'parking' && loc?.parking == 1) ||
        (accessibilityVal === 'bike_parking' && loc?.bike_parking == 1)
      const matchesTime =
        !timeVal || new Date(prog.start_time).getHours() >= parseInt(timeVal.split(':')[0])
      const matchesText =
        !filterSearch ||
        prog.title?.toLowerCase().includes(filterSearch) ||
        prog.description?.toLowerCase().includes(filterSearch) ||
        prog.description_short?.toLowerCase().includes(filterSearch)

      return (!locationVal || matchesLoc) &&
             (!accessibilityVal || matchesAccess) &&
             (!timeVal || matchesTime) &&
             (!filterSearch || matchesText)
    })

    const matchesTopic =
  !topicVal || topic.name?.trim().toLowerCase() === topicVal.trim().toLowerCase()

    const matchesSearch =
      topic.name?.toLowerCase().includes(searchTerm) ||
      topic.description?.toLowerCase().includes(searchTerm) ||
      topic.description_short?.toLowerCase().includes(searchTerm) ||
      matchingPrograms.some(Boolean)

    if (matchesTopic && matchesSearch && matchingPrograms.length > 0) {
      return { ...topic, programs: matchingPrograms }
    }

    return null
  }).filter(Boolean)

  return filtered
}


export function clearFilters(data: any, container: HTMLElement): any[] {
  const topicEl = container.querySelector('#topicFilter') as HTMLSelectElement | null
  const locationEl = container.querySelector('#locationFilter') as HTMLSelectElement | null
  const accessEl = container.querySelector('#accessibilityFilter') as HTMLSelectElement | null
  const timeEl = container.querySelector('#timeFilter') as HTMLInputElement | null
  const searchEl = container.querySelector('#filterSearchInput') as HTMLInputElement | null

  if (topicEl) topicEl.value = ''
  if (locationEl) locationEl.value = ''
  if (accessEl) accessEl.value = ''
  if (timeEl) timeEl.value = ''
  if (searchEl) searchEl.value = ''

  return data.topics.filter((t: any) => (t.programs || []).length > 0)
}


