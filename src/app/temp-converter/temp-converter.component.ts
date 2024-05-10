import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temp-converter.component.html',
  styleUrl: './temp-converter.component.scss'
})
export class TempConverterComponent {
  // Egenskaper.
  c: number = 0; // Celsius.
  f: number = 0; // Fahrenheit.
  resultInF: number = 0; // Result in Fahrenheit.
  resultInC: number = 0; // Result in Celsius.

  // Metod för att konvertera celsius till fahrenheit, F° = (C° * 9/5) + 32.
  convertCelsiusToFahrenheit(): void {
      this.resultInF = (this.c * 9 / 5) + 32;
  }

  // Metod för att konvertera fahrenheit till celsius, C° = (F° - 32) * (5/9).
  convertFahrenheitToCelsius(): void {
      this.resultInC = (this.f - 32) * (5 / 9);
  }
}
