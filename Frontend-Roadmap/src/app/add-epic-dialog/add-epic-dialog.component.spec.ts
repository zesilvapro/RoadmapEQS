import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEpicDialogComponent } from './add-epic-dialog.component';

describe('AddEpicDialogComponent', () => {
  let component: AddEpicDialogComponent;
  let fixture: ComponentFixture<AddEpicDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEpicDialogComponent]
    });
    fixture = TestBed.createComponent(AddEpicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
