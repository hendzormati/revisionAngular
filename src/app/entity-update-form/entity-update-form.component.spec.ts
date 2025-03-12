import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityUpdateFormComponent } from './entity-update-form.component';

describe('EntityUpdateFormComponent', () => {
  let component: EntityUpdateFormComponent;
  let fixture: ComponentFixture<EntityUpdateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntityUpdateFormComponent]
    });
    fixture = TestBed.createComponent(EntityUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
