import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Rx from 'rxjs/Rx'

@Component({
  selector: 'app-rxdemo',
  templateUrl: './rxdemo.component.html',
  styleUrls: ['./rxdemo.component.css']
})
export class RxdemoComponent implements OnInit {

  @ViewChild('demo1')
  demo1: ElementRef;
  @ViewChild('demo2')
  demo2: ElementRef;
  @ViewChild('demo3')
  demo3: ElementRef;

  constructor() { }

  ngOnInit() {
    Rx.Observable.fromEvent(this.demo1.nativeElement, 'click')
      .scan((acc: number, curr) => {
        return acc + 1;
      }, 0)
      .subscribe(count => console.log(`第 ${count} 次点击(demo1)`));


    Rx.Observable.fromEvent(this.demo2.nativeElement, 'click')
      .throttleTime(1000)
      .mapTo(1)
      .scan(count => count + 1)
      .subscribe(count => console.log(`第 ${count} 次点击(demo2) ${new Date().toTimeString()}`));

    Rx.Observable.fromEvent(this.demo3.nativeElement, 'click')
      .throttleTime(1000)
      .map((event: { clientX }) => event.clientX)
      .scan((acc, clientX) => {
        return { count: acc.count + 1, clientX: clientX }
      }, { count: 0, clientX: null })
      .subscribe(info => console.log(`第 ${info.count} 次点击, x:${info.clientX} (demo3) ${new Date().toTimeString()}`));
  }

}
