import { Component, output, signal } from '@angular/core';
import { form, FormField, required, min, max } from '@angular/forms/signals';
import { Track } from '../models/track';


export type TrackFormValue = {
  title: string;
  artist: string;
  rating: number;
};


@Component({
  selector: 'app-track-form',
  imports: [FormField],
  templateUrl: './track-form.html',
  styleUrl: './track-form.css',
})
export class TrackForm {
  add = output<Track>();
  protected model= signal({ title: '', artist: '', rating: 5 });

  protected trackForm = form(this.model, (path) => {
    required(path.title, { message: 'Le titre est requis' });
    required(path.artist, { message: "L'artist est requis" });
    min(path.rating, 0,);
    max(path.rating, 10,);
  });

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.trackForm().valid()) {
      const formFields = this.model();
      const fullTrack: Track = {
        title: formFields.title,
        artist: formFields.artist,
        rating: formFields.rating,
        id: Math.floor(Math.random() * 100000),
        album: 'Non spécifié',
        genre: 'Non spécifié',
        durationSeconds: 180, 
        year: 2026,
        favorite: false,
        coverUrl: 'https://placehold.co/150'
      };
      this.add.emit(fullTrack);
    }
  }
}