import { Component } from '@angular/core';

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'ngconf2020-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scully';
  heroes: Hero[] = [
    { id: 10, name: "Landon" },
    { id: 20, name: "Ella" },
    { id: 30, name: "Madelyn" },
    { id: 40, name: "Haley" }
  ];
  trackByHero(index: number, hero: Hero) { return hero.id; }
}
