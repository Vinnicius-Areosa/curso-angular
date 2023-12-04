import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRoutingComponent } from './app-routing.component';

describe('AppRoutingComponent', () => {
  let component: AppRoutingComponent;
  let fixture: ComponentFixture<AppRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppRoutingComponent]
    });
    fixture = TestBed.createComponent(AppRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
