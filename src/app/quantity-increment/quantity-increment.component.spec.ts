import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DebugElement } from '@angular/core';
import { QuantityIncrementComponent } from './quantity-increment.component';

describe('QuantityIncrementComponent', () => {
  let component: QuantityIncrementComponent;
  let fixture: ComponentFixture<QuantityIncrementComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityIncrementComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityIncrementComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    let clickMeButton = debugElement.nativeElement.querySelector('#clickMe');
    fixture.detectChanges();
    debugElement.nativeElement.querySelector('#simpleClick').textContent;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
