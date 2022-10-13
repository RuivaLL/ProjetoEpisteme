import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosonlineComponent } from './cursosonline.component';

describe('CursosonlineComponent', () => {
  let component: CursosonlineComponent;
  let fixture: ComponentFixture<CursosonlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosonlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
