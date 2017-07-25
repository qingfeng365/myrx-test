import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { TeardownLogic } from 'rxjs/Subscription';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onRun1() {
    console.log('开始创建 observable - 可观察对象:')
    const observable = Rx.Observable.create(function (observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    });
    console.log('subscribe - 订阅前...');
    observable.subscribe({
      next: x => console.log('当前值: ' + x),
      error: err => console.error('错误: ' + err),
      complete: () => console.log('推送完成.'),
    });
    console.log('subscribe - 订阅后...');
  }

  onRun1Other() {
    console.log('开始创建 observable - 可观察对象:')
    const onSubscription = function (observer: Rx.Observer<number>): TeardownLogic {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    };

    const observable: Rx.Observable<number> = Rx.Observable.create(onSubscription);

    const myobserver: Rx.Observer<number> = {
      next: x => console.log('当前值: ' + x),
      error: err => console.error('错误: ' + err),
      complete: () => console.log('推送完成.'),
    };

    console.log('subscribe - 订阅前...');

    const subscription = observable.subscribe(myobserver);

    console.log('subscribe - 订阅后...');
  }

  onRun2() {
    console.log('开始创建 observable - 可观察对象:')
    const observable = Rx.Observable.create(function (observer) {
      console.log('observer:');
      console.log(observer);
      observer.next(1);
      console.log('1');
      observer.next(2);
      console.log('2');
      observer.next(3);
      console.log('3');
      setTimeout(() => {
        observer.next(4);
        console.log('4');
        observer.complete();
      }, 1000);
    });
    console.log('subscribe - 订阅前...');
    observable.subscribe();
    console.log('subscribe - 订阅后...');
  }

  onRun3() {
    console.log('开始创建 observable - 可观察对象:')
    const observable = Rx.Observable.create(function (observer) {
      const intervalID = setInterval(() => {
        observer.next('hi');
      }, 1000);

      return function unsubscribe() {
        clearInterval(intervalID);
      };
    });

    console.log('subscribe - 订阅前...');
    const subscription = observable.subscribe(x => console.log('当前值: ' + x));
    console.log('subscribe - 订阅后...');

    console.log('准备5秒后取消订阅...');
    setTimeout(function() {
      console.log('unsubscribe - 取消订阅');
      subscription.unsubscribe();
    }, 5000);

  }

}
