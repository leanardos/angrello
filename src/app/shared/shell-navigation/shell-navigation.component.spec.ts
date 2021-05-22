import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellNavigationComponent } from './shell-navigation.component';

describe('ShellNavigationComponent', () => {
  let component: ShellNavigationComponent;
  let fixture: ComponentFixture<ShellNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
