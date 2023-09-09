import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPicathuComponent } from './ng-picathu.component';

describe('NgPicathuComponent', () => {
  let component: NgPicathuComponent;
  let fixture: ComponentFixture<NgPicathuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgPicathuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgPicathuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
