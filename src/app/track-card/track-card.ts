import { Component, input, output, inject } from '@angular/core';
import { Track } from '../models/track';
import { DurationFormatPipe } from '../pipes/duration-format-pipe';
import { HighlightFavorite } from '../directives/highlight-favorite';
import { FavoritesService } from '../services/favorites';

@Component({
  selector: 'app-track-card',
  imports: [DurationFormatPipe, HighlightFavorite],
  templateUrl: './track-card.html',
  styleUrl: './track-card.css',
})
export class TrackCard {
  private favoritesService = inject(FavoritesService);
  track = input.required<Track>();
  active = input(false);
  select = output<Track>();
  protected selectTrack(): void {
    this.select.emit(this.track());
  }

  protected toggleFavorite(event: Event): void {

    event.stopPropagation();

    const track = this.track();

    if (track.favorite) {

      this.favoritesService
        .removeFavorite(track.id)
        .subscribe({
          next: () => {
            track.favorite = false;
          },
          error: console.error,
        });

    } else {

      this.favoritesService
        .addFavorite(track.id)
        .subscribe({
          next: () => {
            track.favorite = true;
          },
          error: console.error,
        });

    }
  }
}

