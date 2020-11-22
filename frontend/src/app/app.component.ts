import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  songs = [{ title: 'Hola' }]

  constructor(private api: ApiService) {
    this.getSongs();
  }
  getSongs = () => {
    this.api.getAllSongs().subscribe(
      data => {
        this.songs = data;
      },
      error => {
        console.log(error);
      }
    )
  }
}
