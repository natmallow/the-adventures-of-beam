import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEpisodesComponent } from './nav-episodes.component';

describe('NavEpisodesComponent', () => {
  let component: NavEpisodesComponent;
  let fixture: ComponentFixture<NavEpisodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavEpisodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
