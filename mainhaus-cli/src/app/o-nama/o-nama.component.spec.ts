import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ONamaComponent } from './o-nama.component';

describe('ONamaComponent', () => {
  let component: ONamaComponent;
  let fixture: ComponentFixture<ONamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ONamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ONamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
