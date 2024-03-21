import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { ClientService } from '../service/client.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSelectModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  clientDetails = [
    { value: 'clientA', label: 'Client A' },
    { value: 'clientB', label: 'Client B' },
    { value: 'clientC', label: 'Client C' },
  ];
  selectedClient = this.clientDetails[0].value;
  selectedLabel = this.clientDetails[0].label;

  constructor(private _clientService: ClientService) {}

  valueChanged(value: any) {
    this.selectedClient = value;
    this.selectedLabel = this.clientDetails
      .filter((ele) => ele.value === value)
      .map((ele) => ele.label)[0];
    this._clientService.setSelectedClient(this.selectedClient);
  }
}
