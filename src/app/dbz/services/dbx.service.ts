import { Injectable } from "@angular/core";
import { Warrior } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

  private _warriors: Warrior[] = []

  constructor(){}

  public get warriors() : Warrior[] {
    return [...this._warriors];
  }

  public pushWarrior(v : Warrior) {
    this._warriors.push(v);
  }

}
