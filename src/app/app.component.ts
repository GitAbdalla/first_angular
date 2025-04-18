import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from "./about/about.component";
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, HeroComponent, AboutComponent ,FormComponent , FooterComponent , ServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hospital Demo';
}
