import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { WarriorsComponent } from './warriors/warriors.component';

@NgModule({
  declarations: [
    MainComponent,
    WarriorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainComponent
  ]
})
export class DbzModule { }
