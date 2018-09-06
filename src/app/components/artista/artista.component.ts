import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {
 loadingArtist: boolean;
 topTraks: any = {};
 artist: any = {};
  constructor(private router: ActivatedRoute,
  private spoty: SpotifyService) {
    this.loadingArtist = true;
    this.router.params.subscribe( params => {
      this.getArtista(params['id']);
      this.getTopByArtist(params['id']);
    });
   }

  ngOnInit() {
  }
  getArtista(id: string) {
    this.spoty.getArtista(id)
    .subscribe(artista => {
      this.artist = artista;
      this.loadingArtist = false;
    });
  }

  getTopByArtist(id: string) {
    this.spoty.getTopByArtist(id)
    .subscribe(traks => {
    this.topTraks = traks;
    console.log(this.topTraks);
    });
  }
}
