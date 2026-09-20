import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade02 } from './atividade02';

describe('Atividade02', () => {
  let component: Atividade02;
  let fixture: ComponentFixture<Atividade02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade02],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade02);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
