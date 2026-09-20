import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade06 } from './atividade06';

describe('Atividade06', () => {
  let component: Atividade06;
  let fixture: ComponentFixture<Atividade06>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade06],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade06);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
