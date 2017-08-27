import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {


  @ViewChild('input2')
  input2: ElementRef;

  input3: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit - input2:');
    console.log(this.input2);
    this.input2sub();
    this.input3sub();
  }
  onRun1() {
    const multiplyByTen = function (input) {
      const output = Rx.Observable.create(function (observer) {
        input.subscribe({
          next: (v) => observer.next(10 * v),
          error: (err) => observer.error(err),
          complete: () => observer.complete()
        });
      });
      return output;
    }

    const input = Rx.Observable.create(function (observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    });
    const output = multiplyByTen(input);
    output.subscribe(x => console.log(x));
  }
  onRun2() {
    Rx.Observable.from([1, 2, 3, 4])
      .filter(value => value % 2 === 0)
      .map(value => value * value)
      .subscribe(
      value => console.log(value),
      error => console.error(error),
      () => console.log('已结束.')
      );
  }
  onInputByInput1(value) {
    console.log('搜索:' + value);
  }

  input2sub() {
    Rx.Observable.fromEvent(this.input2.nativeElement, 'input')
      .debounceTime(500)
      .subscribe((event: any) => {
        console.log(event);
        console.log(event.target.value)
        console.log('搜索:' + this.input2.nativeElement.value)
      })
  }

  input3sub() {
    this.input3.valueChanges
      .debounceTime(500)
      .subscribe(value => console.log('搜索:' + value));
  }
}
