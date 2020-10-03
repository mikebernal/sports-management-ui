import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompetitorComponent } from './update-competitor.component';

describe('UpdateCompetitorComponent', () => {
  let component: UpdateCompetitorComponent;
  let fixture: ComponentFixture<UpdateCompetitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCompetitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompetitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
