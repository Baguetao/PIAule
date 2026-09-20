import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade05 } from './atividade05';

describe('Atividade05', () => {
  let component: Atividade05;
  let fixture: ComponentFixture<Atividade05>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade05],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade05);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
