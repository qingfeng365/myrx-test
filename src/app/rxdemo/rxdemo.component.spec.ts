import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxdemoComponent } from './rxdemo.component';

describe('RxdemoComponent', () => {
  let component: RxdemoComponent;
  let fixture: ComponentFixture<RxdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
