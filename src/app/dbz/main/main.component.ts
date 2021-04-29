import { Component, OnInit } from '@angular/core';

interface Warrior {
  name: string
  power: number
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {

  warriors: Warrior[] = []
  warrior: Warrior = {
    name: '',
    power: 0
  }

  addWarrior() {
    if (this.warrior.name.trim().length === 0) return;

    this.warriors.push(this.warrior);
    this.warrior = {
      name: '',
      power: 0
    }
  }

}
