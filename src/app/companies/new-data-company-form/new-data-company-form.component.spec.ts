import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDataCompanyFormComponent } from './new-data-company-form.component';

describe('NewDataCompanyFormComponent', () => {
  let component: NewDataCompanyFormComponent;
  let fixture: ComponentFixture<NewDataCompanyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDataCompanyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDataCompanyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
