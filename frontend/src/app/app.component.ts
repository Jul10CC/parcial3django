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
                                                                                                                                                                  songs = [{ titlea: 'Too Good', 'artista': 'Drake', 'albuma': 'Views', 'release_datea': '2016', 'gendera': 'Hip Hop'}, { titlea: 'Rocket Man', 'artista': 'Elton John', 'albuma': 'Honky Chateu', 'release_datea': '1972', 'gendera': 'Soft Rock'}]
  title = "";
  artist = "";
  album = "";
  release_date = "";
  gender = "";                                                                                                                                                                    
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

  songsClicked = () => {
    this.api.getOneSongs().subscribe(
      data => {
        this.title = data.title;
        this.artist = data.artist;
        this.album = data.album;
        this.release_date = data.release_date;
        this.gender = data.gender;
      },
      error => {
        console.log(error);
      }
    )
  }
}
