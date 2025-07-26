import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainContentComponent],
  template: `
    <main>
      <app-main-content></app-main-content>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: []
})
export class AppComponent {
  title = 'jupiter-frontpage';
}