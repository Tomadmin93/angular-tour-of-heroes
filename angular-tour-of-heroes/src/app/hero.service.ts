import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private _messageSvc: MessageService,
  ) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this._messageSvc.add('HeroService: fetched heroes')
    return heroes;
  }
}
