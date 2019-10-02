import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BranchesComponent } from './branches.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    BranchesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PipesModule,
  ],
  exports: [
    BranchesComponent
  ],
  providers: [],
  bootstrap: []
})
export class BranchesModule { }
