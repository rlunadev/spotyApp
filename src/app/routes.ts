import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

export const ROUTES: Routes = [
    {path: 'Home', component: HomeComponent},
    {path: 'Search', component: SearchComponent},
    {path: 'artista/:id', component: ArtistaComponent},
    {path: '', pathMatch: 'full', redirectTo: 'Home'},
    {path: '**', pathMatch: 'full', redirectTo: 'Home'}
];
