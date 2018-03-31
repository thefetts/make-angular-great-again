export const episodes: Episode[] = [
  {
    season: 1, episode: 1, title: 'Winter Is Coming', changes: []
  },
  {
    season: 3, episode: 6, title: 'And Now His Watch is Ended',
    changes: [{title: 'Lord Commander', reason: `being murdered by Rast at Crastor's Keep`, newName: 'Ser Alliser Thorne', acting: true}]
  },
  {
    season: 5, episode: 2, title: 'The House of Black and White',
    changes: [{title: 'Lord Commander', reason: 'winning the election by a single vote', newName: 'Jon Snow'}]
  },
  {
    season: 5, episode: 3, title: 'High Sparrow',
    changes: [{title: 'First Ranger', reason: 'being appointed by Jon Snow', newName: 'Ser Alliser Thorne'}]
  },
  {
    season: 5, episode: 7, title: 'The Gift',
    changes: [{title: 'Maester', reason: 'dying of old age'}]
  },
  {
    season: 5, episode: 10, title: `Mother's Mercy`,
    changes: [
      {title: 'Lord Commander', reason: `being betrayed by the Night's Watch`, newName: 'Ser Alliser Thorne', acting: true},
      {title: 'First Ranger', reason: 'Ser Alliser Thorne assumes command'},
    ]
  },
  {
    season: 6, episode: 3, title: 'Oathbreaker',
    changes: [
      {title: 'Lord Commander', reason: 'a resurrected Jon Snow hangs him for treason', newName: 'Eddison Tollett', acting: true},
      {title: 'First Steward', reason: 'a resurrected Jon Snow hangs him for treason'},
      {title: 'First Builder', reason: 'a resurrected Jon Snow hangs him for treason'},
    ]
  },
  {
    season: 7, episode: 7, title: 'The Dragon and the Wolf', changes: []
  }
]
