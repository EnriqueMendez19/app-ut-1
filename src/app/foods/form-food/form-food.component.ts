import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-form-food',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, MatInputModule, MatFormFieldModule],
  templateUrl: './form-food.component.html',
  styleUrl: './form-food.component.scss'
})
export class FormFoodComponent {
  name = new FormControl('');

}
