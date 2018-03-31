interface Episode {
  season: number,
  episode: number,
  title: string,
  changes: PositionChange[]
}

interface PositionChange {
  title: string,
  reason: string,
  newName?: string
  acting?: boolean
}
