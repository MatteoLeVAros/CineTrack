// src/app/app.ts — on passe à un tableau
import { Component, signal } from '@angular/core';
import { TrackList } from './track-list/track-list';
import { Track } from './models/track';

@Component({
  selector: 'app-root',
  imports: [TrackList],
  templateUrl: './app.html',
})
export class App {
  protected tracks = signal<Track[]>([
    { id: 1, 
      title: 'Blinding Lights', 
      artist: 'The Weeknd', 
      album: 'After Hours',
      genre: 'Synth-pop', 
      durationSeconds: 200, 
      year: 2019, 
      rating: 9,
      favorite: true, 
      coverUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png' 
    },
    { id: 2, 
      title: 'As It Was', 
      artist: 'Harry Styles', 
      album: "Harry's House",
      genre: 'Pop', 
      durationSeconds: 167, 
      year: 2022, 
      rating: 8,
      favorite: false, 
      coverUrl: 'https://tse2.mm.bing.net/th/id/OIP.40KWj4wg1VSCIRn1GqXtIgHaHs?rs=1&pid=ImgDetMain&o=7&rm=3' 
    },
    { id: 3, 
      title: 'DtMF', 
      artist: 'Bad Bunny', 
      album: 'After Hours',
      genre: 'Synth-pop', 
      durationSeconds: 200, 
      year: 2025, 
      rating: 9,
      favorite: true, 
      coverUrl: 'https://tse3.mm.bing.net/th/id/OIP.k50siTNdOhAGAhU5mFymrQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' 
    },
    { id: 4, 
      title: 'Without Me', 
      artist: 'Eminem', 
      album: "The Eminem Show",
      genre: 'Pop', 
      durationSeconds: 167, 
      year: 2022, 
      rating: 8,
      favorite: false, 
      coverUrl: 'https://tse1.mm.bing.net/th/id/OIP.hWMSTgyBNA5YVttANRWi2AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' 
    },
    { id: 5, 
      title: '44D', 
      artist: 'Bigflo & Oli', 
      album: 'Karma',
      genre: 'Synth-pop', 
      durationSeconds: 200, 
      year: 2019, 
      rating: 9,
      favorite: true, 
      coverUrl: 'https://www.artistikrezo.com/wp-content/uploads/2026/03/Karma-Bigflo-et-Oli.png' 
    },
    { id: 6, 
      title: 'Eté 90', 
      artist: 'Therapie Taxi', 
      album: "Rupture 2 merde",
      genre: 'Pop', 
      durationSeconds: 167, 
      year: 2022, 
      rating: 8,
      favorite: false, 
      coverUrl: 'https://tse3.mm.bing.net/th/id/OIP.uhm8Sb2gfhU3Z2QNP9TdcwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' 
    },
  ]);
}