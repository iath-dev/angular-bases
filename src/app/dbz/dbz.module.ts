import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { WarriorsComponent } from './warriors/warriors.component';
import { AddComponent } from './add/add.component';
import { DbzService } from './services/dbx.service';

@NgModule({
  declarations: [
    MainComponent,
    WarriorsComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainComponent
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
