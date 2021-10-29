import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(
    private _heroService: HeroService,
    private _messageSvc: MessageService,
  ) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this._messageSvc.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this._heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
