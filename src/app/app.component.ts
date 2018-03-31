import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  roster: Member[] = [
    {title: 'Lord Commander', name: 'Jeor Mormont', leader: true, ordinal: 997},
    {title: 'Maester', name: 'Aemon Targaryen', leader: false},
    {title: 'First Ranger', name: 'Benjen Stark', leader: false},
    {title: 'First Steward', name: 'Bowen Marsh', leader: false},
    {title: 'Master-at-arms', name: 'Ser Alliser Thorne', leader: false},
    {title: 'First Builder', name: 'Othell Yarwyck', leader: false}
  ]

  getLeaderTitle(): string {
    const leader = this.roster.find(member => member.leader)
    return `${this.suffix(leader.ordinal)} ${leader.title} ${leader.name}`
  }

  private suffix(num: number): string {
    const ones = num % 10, tens = num % 100
    if (ones === 1 && tens !== 11) return `${num}st`
    if (ones === 2 && tens !== 12) return `${num}nd`
    if (ones === 3 && tens !== 13) return `${num}rd`
    return `${num}th`
  }
}
