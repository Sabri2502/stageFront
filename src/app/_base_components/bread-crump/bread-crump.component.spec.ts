import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrumpComponent } from './bread-crump.component';

describe('BreadCrumpComponent', () => {
  let component: BreadCrumpComponent;
  let fixture: ComponentFixture<BreadCrumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadCrumpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadCrumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
