import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  songs = [{ title: 'a', 'artist': 'e', 'album': 'i', 'release_date': 'o', 'gender': 'u'}]

  constructor(private api: ApiService) {
    this.getSongs();
  }
  getSongs = () => {
    this.api.getAllSongs().subscribe(
      data => {
        this.songs = data.results;
      },
      error => {
        console.log(error);
      }
    )
  }
}
