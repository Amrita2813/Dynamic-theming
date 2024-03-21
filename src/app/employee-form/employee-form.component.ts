import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ClientService } from '../service/client.service';
@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    CommonModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
})
export class EmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup;
  selectedClient!: string;
  constructor(
    private _formBuilder: FormBuilder,
    private _clientService: ClientService
  ) {
    this._clientService.selectedClient$.subscribe((client) => {
      this.selectedClient = client;
    });
  }

  ngOnInit(): void {
    this.employeeForm = this._formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', Validators.required),
      address: new FormControl(),
      position: new FormControl('', Validators.required),
      dateOfJoining: new FormControl('', Validators.required),
    });
  }

  /**
   * @description: this is a getter function for email
   */
  get emailControl() {
    return this.employeeForm.get('email');
  }

  /**
   * @description: this is a getter function for firstName
   */
  get firstName() {
    return this.employeeForm.get('firstName');
  }

  /**
   * @description: this is a getter function for phoneNumber
   */
  get phoneNumber() {
    return this.employeeForm.get('phoneNumber');
  }

  /**
   * @description: This function will console the all form values in the dev tools
   */
  submitEmployeeForm() {
    console.log(this.employeeForm.value);
  }
}
