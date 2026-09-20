import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade08 } from './atividade08';

describe('Atividade08', () => {
  let component: Atividade08;
  let fixture: ComponentFixture<Atividade08>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade08],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade08);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
