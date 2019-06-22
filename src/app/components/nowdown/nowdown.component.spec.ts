import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowdownComponent } from './nowdown.component';

describe('NowdownComponent', () => {
  let component: NowdownComponent;
  let fixture: ComponentFixture<NowdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
