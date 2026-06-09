// src/app/app.ts — on passe à un tableau
import { Component, inject } from '@angular/core';
import { TrackList } from './track-list/track-list';
import { Track } from './models/track';
import { TrackFormValue } from './track-form/track-form';
import { toSignal } from '@angular/core/rxjs-interop';
import { TrackService } from './services/track';

@Component({
  selector: 'app-root',
  imports: [TrackList],
  templateUrl: './app.html',
})
export class App {
  private trackService = inject(TrackService);
  
  protected tracks = toSignal(this.trackService.getTracks(), {
    initialValue: [] as Track[],
  });

  

  addTrack(track: TrackFormValue) {
    console.log('Morceau créé depuis le formulaire :', track);
  }


}