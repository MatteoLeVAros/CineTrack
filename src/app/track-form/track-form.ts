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
  trackCreated = output<TrackFormValue>();
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
      this.trackCreated.emit(this.model());
    }
  }
}