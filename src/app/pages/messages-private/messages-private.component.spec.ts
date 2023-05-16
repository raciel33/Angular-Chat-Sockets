import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesPrivateComponent } from './messages-private.component';

describe('MessagesPrivateComponent', () => {
  let component: MessagesPrivateComponent;
  let fixture: ComponentFixture<MessagesPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesPrivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
