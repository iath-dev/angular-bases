import { Component } from '@angular/core';
import { Warrior } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbx.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  warrior: Warrior = {
    name: 'Maestro Roshi',
    power: 15000
  }

  constructor(private dbzService: DbzService) {

  }
}
