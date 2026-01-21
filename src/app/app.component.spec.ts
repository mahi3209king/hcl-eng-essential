import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component'; // Import CounterComponent

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, CounterComponent]  // Import AppComponent and CounterComponent
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy(); // Ensure AppComponent is created successfully
  });

  it('should render the correct title', () => {
    const compiled = fixture.nativeElement;
    // Test if the rendered title contains the expected text
    expect(compiled.querySelector('h1').textContent).toContain('Hello, my-angular-app');
  });
});
