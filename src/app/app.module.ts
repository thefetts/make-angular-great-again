import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {MagaComponent} from './maga.component'
import {EpisodePickerComponent} from './components/episode-picker.component'


@NgModule({
  declarations: [
    MagaComponent,
    EpisodePickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MagaComponent]
})
export class AppModule {}
