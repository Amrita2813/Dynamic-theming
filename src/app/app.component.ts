import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { HeaderComponent } from './header/header.component';
import { ClientService } from './service/client.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EmployeeFormComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'assessment1';

  selectedClient!: string;
  constructor(private _clientService: ClientService) {
    this._clientService.selectedClient$.subscribe((client) => {
      this.selectedClient = client;
    });
  }
}
