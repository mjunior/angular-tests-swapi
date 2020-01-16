import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesListComponent } from './peoples-list.component';
import { By } from '@angular/platform-browser';

fdescribe('PeoplesListComponent', () => {
  let component: PeoplesListComponent;
  let fixture: ComponentFixture<PeoplesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list the peoples', () => {
    expect(component.peoples.length).toEqual(3);
    const li = fixture.debugElement.queryAll(By.css('#people-list li'));
    expect(li[0].nativeElement.textContent.trim()).toEqual('Luke Skywalker');
    expect(li[1].nativeElement.textContent.trim()).toEqual('2 Luke Skywalker');
    expect(li[2].nativeElement.textContent.trim()).toEqual('3 Luke Skywalker');
  })
});
