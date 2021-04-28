import { Component } from "@angular/core";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  name: string = 'IronMan';
  age: number = 45;


  public get capitalName() : string {
    return this.name.toUpperCase()
  }

  getName(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'SpiderMan'
  }

  changeAge(): void {
    this.age = 16
  }
}
