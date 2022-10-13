import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarservicosComponent } from './agendarservicos.component';

describe('AgendarservicosComponent', () => {
  let component: AgendarservicosComponent;
  let fixture: ComponentFixture<AgendarservicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarservicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendarservicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
