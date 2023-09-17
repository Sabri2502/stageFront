import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailVerifComponent } from './mail-verif.component';

describe('MailVerifComponent', () => {
  let component: MailVerifComponent;
  let fixture: ComponentFixture<MailVerifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailVerifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailVerifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
