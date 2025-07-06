export function applyFilters(data: any, searchTerm: string): any[] {
  const topicVal = (document.getElementById('topicFilter') as HTMLSelectElement).value
  const locationVal = (document.getElementById('locationFilter') as HTMLSelectElement).value
  const accessibilityVal = (document.getElementById('accessibilityFilter') as HTMLSelectElement).value
  const timeVal = (document.getElementById('timeFilter') as HTMLInputElement).value
  const filterSearch = (document.getElementById('filterSearchInput') as HTMLInputElement).value.toLowerCase()

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

    const matchesTopic = !topicVal || topic.name === topicVal
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

export function clearFilters(data: any): any[] {
  (document.getElementById('topicFilter') as HTMLSelectElement).value = '';
  (document.getElementById('locationFilter') as HTMLSelectElement).value = '';
  (document.getElementById('accessibilityFilter') as HTMLSelectElement).value = '';
  (document.getElementById('timeFilter') as HTMLInputElement).value = '';
  (document.getElementById('filterSearchInput') as HTMLInputElement).value = '';
  return data.topics.filter((t: any) => (t.programs || []).length > 0)
}

