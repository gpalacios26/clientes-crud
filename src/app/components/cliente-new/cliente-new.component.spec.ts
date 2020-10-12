import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteNewComponent } from './cliente-new.component';

describe('ClienteNewComponent', () => {
  let component: ClienteNewComponent;
  let fixture: ComponentFixture<ClienteNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
