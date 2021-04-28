import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {

  heroes: string[] = ['Joker', 'Superman', 'Spencer', 'Batman', 'Capitan America', 'Capitana Marvel'];
  deleted: string = '';

  deleteHero(){
    this.deleted = this.heroes.pop() || '';
  }

}
