import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StartsWithPipe } from './startsWith.pipes';


@NgModule({
  declarations: [
    StartsWithPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    StartsWithPipe
  ],
  providers: [],
  bootstrap: []
})
export class PipesModule { }
