import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';



@Component({
  providers: [HeroService],
  selector: 'my-heroes',
  templateUrl:'/app/heroes.component.html',
  styleUrls: [ '/app/heroes.component.css' ]
})


export class HeroesComponent implements OnInit {
  
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(
    private heroService: HeroService,   
    private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
