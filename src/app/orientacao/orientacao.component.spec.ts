import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientacaoComponent } from './orientacao.component';

describe('OrientacaoComponent', () => {
  let component: OrientacaoComponent;
  let fixture: ComponentFixture<OrientacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrientacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrientacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
