import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RxdemoComponent } from './rxdemo/rxdemo.component';
import { ObservableComponent } from './observable/observable.component';
import { Routes, RouterModule } from '@angular/router';
import { SubjectComponent } from './subject/subject.component';
import { OperatorsComponent } from './operators/operators.component';

const routes: Routes = [
  {
    path: 'rxdemo',
    component: RxdemoComponent,
  },
  {
    path: '',
    redirectTo: '/rxdemo',
    pathMatch: 'full'
  },
  {
    path: 'observable',
    component: ObservableComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'operators',
    component: OperatorsComponent

  }
];


@NgModule({
  declarations: [
    AppComponent,
    RxdemoComponent,
    ObservableComponent,
    SubjectComponent,
    OperatorsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
