import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private selectedClientSubject = new BehaviorSubject<string>('ClientA');
  selectedClient$ = this.selectedClientSubject.asObservable();

  constructor() {}

  setSelectedClient(client: string) {
    console.log('client', client);
    this.selectedClientSubject.next(client);
  }
}
