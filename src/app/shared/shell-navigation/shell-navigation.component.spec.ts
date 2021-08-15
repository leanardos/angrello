import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShellNavigationComponent } from './shell-navigation.component';

describe('ShellNavigationComponent', () => {
  let component: ShellNavigationComponent;
  let fixture: ComponentFixture<ShellNavigationComponent>;

  beforeEach(waitForAsync(() => {
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
