import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesListComponent } from './peoples-list.component';
import { By } from '@angular/platform-browser';

describe('PeoplesListComponent', () => {
  let component: PeoplesListComponent;
  let fixture: ComponentFixture<PeoplesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplesListComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(PeoplesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    console.log(fixture)
    console.log(component)
  }));

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list names', () => {
    expect(component.peoples.length).toEqual(3);
    const listNames = fixture.debugElement.queryAll(By.css('#people-list li'));
    expect(listNames[0].nativeElement.textContent.trim()).toEqual('Luke Skywalker');
    expect(listNames[1].nativeElement.textContent.trim()).toEqual('Darth Vader');
    expect(listNames[2].nativeElement.textContent.trim()).toEqual('Leia Organa');
  })
});
