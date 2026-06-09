// src/app/track-list/track-list.ts
import { Component, input, signal, computed, output} from '@angular/core';
import { TrackCard } from '../track-card/track-card';
import { Track } from '../models/track';
import { TrackForm, TrackFormValue } from '../track-form/track-form';

@Component({
  selector: 'app-track-list',
  imports: [TrackCard, TrackForm],
  templateUrl: './track-list.html',
  styleUrls: ['./track-list.css'],
})
export class TrackList {
  tracks = input.required<Track[]>();
  trackAdded = output<TrackFormValue>();

  protected selectedId = signal<number | null>(null);
  protected searchTerm = signal('');

  addTrack(track: TrackFormValue) {
    this.trackAdded.emit(track);
  }

  protected filteredTracks = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return this.tracks();
    
    return this.tracks().filter(t =>
      t.title.toLowerCase().includes(term) ||
      t.artist.toLowerCase().includes(term) ||
      t.album.toLowerCase().includes(term),
    );
  });
}