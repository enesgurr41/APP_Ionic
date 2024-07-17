import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GatePage } from './gate.page';

describe('GatePage', () => {
  let component: GatePage;
  let fixture: ComponentFixture<GatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GatePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
