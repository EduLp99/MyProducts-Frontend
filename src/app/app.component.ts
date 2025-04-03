import { Component } from '@angular/core';
import { HeaderComponent } from "./components/template/header/header.component";
import { NavComponent } from "./components/template/nav/nav.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [HeaderComponent, NavComponent]
})
export class AppComponent {
  title = 'MyProducts-Frontend';
}
