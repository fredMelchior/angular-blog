import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-small',
  standalone: true,
  imports: [],
  templateUrl: './card-small.component.html',
  styleUrl: './card-small.component.css'
})
export class CardSmallComponent {
  @Input()
  id = "0"
  @Input()
  card_small_image: string = ''
  @Input()
  card_small_title: string = ''
  @Input()
  card_small_desc: string = ''
}
