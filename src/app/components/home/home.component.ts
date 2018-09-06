import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
 // paises: any[];
   nuevasCanciones: any[] = [];
   loading: boolean;
   isError: boolean;
   msjError: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases()
    .subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (error) => {
      this.loading = false;
      this.isError = true;
      this.msjError = error.error.error.message;
    });
  }

  ngOnInit() {
  }

}
