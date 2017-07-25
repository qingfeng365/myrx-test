import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onRun1() {
    console.log('----------------------');
    const subject = new Rx.Subject();

    console.log('开始订阅A...')
    subject.subscribe({
      next: (v) => console.log('观察A: ' + v)
    });

    console.log('开始订阅B...')
    subject.subscribe({
      next: (v) => console.log('观察B: ' + v)
    });

    console.log('开始发射值:1');
    subject.next(1);
    console.log('开始发射值:2')
    subject.next(2);

    console.log('----------------------');
  }
  onRun1Diff() {
    console.log('======================');
    const observable = Rx.Observable.create(function (observer) {
      console.log('开始发射值:1');
      observer.next(1);
      console.log('开始发射值:2')
      observer.next(2);
      observer.complete();
    });

    console.log('开始订阅A...')
    observable.subscribe({
      next: (v) => console.log('观察A: ' + v)
    });

    console.log('开始订阅B...')
    observable.subscribe({
      next: (v) => console.log('观察B: ' + v)
    });

    console.log('======================');
  }

  onRun2() {
    const subject = new Rx.Subject();
    console.log('开始订阅A...')
    subject.subscribe({
      next: (v) => console.log('观察A: ' + v)
    });
    console.log('开始订阅B...')
    subject.subscribe({
      next: (v) => console.log('观察B: ' + v)
    });

    const observable = Rx.Observable.create(function (observer) {
      console.log('开始发射值:1');
      observer.next(1);
      console.log('开始发射值:2')
      observer.next(2);
      observer.complete();
    });

    console.log('subject 开始订阅 observable ...')
    observable.subscribe(subject);
  }
}
