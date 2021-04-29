import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Warrior } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbx.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent {
  @Input('default') warrior: Warrior = {
    name: '',
    power: 0
  }

  constructor(private dbzService: DbzService) {}


  addWarrior() {
    if (this.warrior.name.trim().length === 0) return;

    this.dbzService.pushWarrior(this.warrior);

    this.warrior = {
      name: '',
      power: 0
    }
  }
}
