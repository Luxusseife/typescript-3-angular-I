import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-length-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './length-converter.component.html',
  styleUrl: './length-converter.component.scss'
})
export class LengthConverterComponent {
  // Egenskaper.
  m: number = 0; // Meter.
  ft: number = 0; // Feet.
  resultInM: number = 0; // Resultat i meter.
  resultInFt: number = 0; // Resultat i feet.

  // Metod för att konvertera meter till feet, M = Ft / 3.2808.
  convertMeterToFeet(): void {
    this.resultInFt = this.m / 3.2808;
  }

  // Metod för att konvertera feet till meter, Ft = M * 3.2808.
  convertFeetToMeter(): void {
    this.resultInM = this.ft * 3.2808;
  }
}
