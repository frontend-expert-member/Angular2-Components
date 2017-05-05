import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { ExampleComponent } from './example.component';
import { ComponentLibraryModule } from './component-library.module';


describe('ExampleComponent', () => {

  let comp: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;
  let de: DebugElement;
  let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ ExampleComponent ],
        imports: [ ComponentLibraryModule ],
        }).compileComponents(); // compile template and css for external templates and styles
    }));

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleComponent);
        comp = fixture.componentInstance; // ExampleComponent test instance
        de = fixture.debugElement;
        el = de.nativeElement;
    });

    it('ExampleComponent is Loaded', () => {
        fixture.detectChanges();
        expect(el).toBeDefined();
    });
});
