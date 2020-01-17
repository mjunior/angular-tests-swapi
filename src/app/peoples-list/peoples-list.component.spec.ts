import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { PeoplesListComponent } from './peoples-list.component';
import { PeoplesListService } from './peoples-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export class DataStub {
  public getPeoples(): Observable<any> {
    return new Observable((observer) => {
      observer.next({ results: [{ name: 1 }, { name: 1 }] });
    });
  }
}

fdescribe('PeoplesListComponent', () => {
  let component: PeoplesListComponent;
  let fixture: ComponentFixture<PeoplesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeoplesListComponent],
      imports: [ HttpClientTestingModule ],
      providers: [{ provide: PeoplesListService, useClass: DataStub }]
    });

    fixture = TestBed.createComponent(PeoplesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('teste', () => {
    expect( component.peoples.length).toEqual(2);
  });
});
