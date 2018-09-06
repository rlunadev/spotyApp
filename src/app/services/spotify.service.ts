import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClients: HttpClient) {
    console.log('hola desde el servicios');
   }
   getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAaT-C59FTI0xhtCrVw-edhBECpyNUszb3pSCHTuA8-Kogp_Ry6wKnBlrOPXqAAzRujlQlD5AD8KrclwZ8'
     });
    return this.httpClients.get(url, {headers});
   }

   getNewReleases() {
    return this.getQuery('browse/new-releases?Limit=20')
               .pipe(map(data =>  data['albums'].items));
   }

   getArtistas(termino: string) {
    return this.getQuery(`search?query=${termino}&type=artist&market=US&offset=5&limit=10`)
    .pipe(map(data => data['artists'].items));
  }
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    // .pipe(map(data => data['artists'].items));
  }
  getTopByArtist(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map(data => data['tracks']));
  }

  //  addHero (hero: Hero): Observable<Hero> {
  //   const headers = new HttpHeaders({
  //     'Access-Control-Allow-Origin': '*',
  //    });
  //   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addHero', hero))
  //     );
  // }
}
