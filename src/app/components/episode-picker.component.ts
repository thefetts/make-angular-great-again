import {Component, EventEmitter, Output} from '@angular/core'
import {episodes} from '../episodes'

@Component({
  selector: 'maga-episode-picker',
  templateUrl: './episode-picker.component.html',
  styleUrls: ['./episode-picker.component.scss']
})
export class EpisodePickerComponent {
  episodeIndex: number = 0
  episode: Episode = episodes[this.episodeIndex]
  @Output() updateRoles: EventEmitter<PositionChange[]> = new EventEmitter()

  next() {
    if (this.episodeIndex >= episodes.length - 1) return
    this.episode = episodes[++this.episodeIndex]
    this.updateRoles.emit(this.episode.changes)
  }
}
