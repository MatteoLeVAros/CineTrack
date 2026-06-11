import { Component, inject, signal } from '@angular/core';
import { FavoritesService } from '../services/favorites';
import { Track } from '../models/track';
import { TrackList } from '../track-list/track-list';

@Component({
  selector: 'app-favorites',
  imports: [TrackList],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})

export class Favorites {

  private favoritesService = inject(FavoritesService);

  protected tracks = signal<Track[]>([]);

  constructor() {
    this.loadFavorites();
  }

  private loadFavorites(): void {
    this.favoritesService
      .getFavorites()
      .subscribe({
        next: (tracks) => this.tracks.set(tracks),
        error: console.error,
      });
  }
}

