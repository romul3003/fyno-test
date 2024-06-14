export const formatTime = (ms: number): string => {
  const totalMinutes = Math.floor(ms / (1000 * 60))
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  return `${hours ? `${hours}h` : ''} ${minutes ? ` ${minutes}m` : ''}`
}
