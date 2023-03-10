import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {Product} from "../../models/product";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-dark justify-content-center text-light p-2 ">
      <span>Filter: </span>
      <input type="radio" name="filter" value="All"
             [(ngModel)]="selectedRadioButtonValue"
             (change)="onRadioButtonChanged()">
      <span class="p-2">{{'All Products'}}</span>

      <input type="radio" name="filter" value="clothing"
             [(ngModel)]="selectedRadioButtonValue"
             (change)="onRadioButtonChanged()">
      <span class="p-2">{{'Clothing'}}</span>

      <input type="radio" name="filter" value="jewelery"
             [(ngModel)]="selectedRadioButtonValue"
             (change)="onRadioButtonChanged()">
      <span class="p-2">{{'Jewelery'}}</span>

      <input type="radio" name="filter" value="electronics"
             [(ngModel)]="selectedRadioButtonValue"
             (change)="onRadioButtonChanged()">
      <span class="p-2">{{'Electronics'}}</span>
    </div>
  `,
  styles: [
  ]
})
export class CategoryComponent {
  selectedRadioButtonValue: string = 'All';

  @Output()
  radioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonChanged(){
    this.radioButtonChanged.emit(this.selectedRadioButtonValue);
  }

}
