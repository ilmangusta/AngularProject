import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [UserComponent, HeaderComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {}
