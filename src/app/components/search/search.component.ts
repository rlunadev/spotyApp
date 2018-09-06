import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  loading: boolean;
  constructor(private spoti: SpotifyService) { }
     artistas: any[] = [];

  ngOnInit() {
  }
  
  buscar(termino: string) {
    this.loading = true;
    this.spoti.getArtistas(termino)
    .subscribe((data: any) => {
      this.artistas = data;
    });
    this.loading = false;
  }
}
