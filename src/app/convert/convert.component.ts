import { Component } from '@angular/core';
import { LengthConverterComponent } from '../length-converter/length-converter.component';
import { TempConverterComponent } from '../temp-converter/temp-converter.component';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [LengthConverterComponent, TempConverterComponent],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})
export class ConvertComponent {
}
