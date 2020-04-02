import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ScullyLibModule, RouterModule.forRoot([{
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
  ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
