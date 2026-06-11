import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Track } from '../models/track';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {

  private http = inject(HttpClient);

  getFavorites() {
    return this.http.get<Track[]>(
      `${environment.apiUrl}/favorites`
    );
  }

  addFavorite(trackId: number) {
    return this.http.post(
      `${environment.apiUrl}/favorites/${trackId}`,
      {}
    );
  }

  removeFavorite(trackId: number) {
    return this.http.delete(
      `${environment.apiUrl}/favorites/${trackId}`
    );
  }
}