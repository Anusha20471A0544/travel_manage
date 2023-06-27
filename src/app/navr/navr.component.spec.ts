import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavrComponent } from './navr.component';

describe('NavrComponent', () => {
  let component: NavrComponent;
  let fixture: ComponentFixture<NavrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
