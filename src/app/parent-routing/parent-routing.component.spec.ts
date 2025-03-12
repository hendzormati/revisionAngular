import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRoutingComponent } from './parent-routing.component';

describe('ParentRoutingComponent', () => {
  let component: ParentRoutingComponent;
  let fixture: ComponentFixture<ParentRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentRoutingComponent]
    });
    fixture = TestBed.createComponent(ParentRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
