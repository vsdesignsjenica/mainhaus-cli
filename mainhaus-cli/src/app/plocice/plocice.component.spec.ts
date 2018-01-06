import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlociceComponent } from './plocice.component';

describe('PlociceComponent', () => {
  let component: PlociceComponent;
  let fixture: ComponentFixture<PlociceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlociceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlociceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
