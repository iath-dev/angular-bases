import { Component, Input } from '@angular/core';
import { Warrior } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbx.service';

@Component({
  selector: 'app-warriors',
  templateUrl: './warriors.component.html',
  styleUrls: ['./warriors.component.sass']
})
export class WarriorsComponent {

  get warriors(): Warrior[] {
    return this.dbzService.warriors;
  }

  constructor(private dbzService: DbzService) {}
}
