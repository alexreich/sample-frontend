import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BranchesModule } from './branches/branches.module';
import { ServicesModule } from './services/services.module';
import { PipesModule } from './pipes/pipes.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BranchesModule,
    PipesModule
  ],
  providers: [ServicesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
