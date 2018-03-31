import {Component} from '@angular/core'

@Component({
  selector: 'maga-root',
  templateUrl: './maga.component.html',
  styleUrls: ['./maga.component.scss']
})
export class MagaComponent {
  roster: Member[] = [
    {title: 'Lord Commander', name: 'Jeor Mormont', leader: true},
    {title: 'Maester', name: 'Aemon Targaryen', leader: false},
    {title: 'First Ranger', name: 'Benjen Stark', leader: false},
    {title: 'First Steward', name: 'Bowen Marsh', leader: false},
    {title: 'First Builder', name: 'Othell Yarwyck', leader: false}
  ]

  onUpdateRoles(changes: PositionChange[]) {
    this.roster.forEach(member => {
      if (member.change) {
        member.name = member.change.newName
        member.change = undefined
      }
    })

    changes.forEach(change => {
      const current = this.roster.find(member => member.title === change.title)
      current.change = change
    })
  }

  getLeader() {
    return this.roster.find(member => member.leader)
  }
}
