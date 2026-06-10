import { Component, signal } from '@angular/core';
import { Track } from './models/track';
import { TrackForm } from './track-form/track-form';
import { TrackDetail } from './track-detail/track-detail';
import { TrackSearch } from './track-search/track-search';

@Component({
  selector: 'app-root',
  imports: [TrackForm, TrackSearch, TrackDetail],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected localTracks = signal<Track[]>([]);
  protected selectedTrack = signal<number | null>(null); // Q7v3K7

  protected addTrack(track: Track): void {
    this.localTracks.update((list) => [...list, track]);
  }
}