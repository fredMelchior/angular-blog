import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-big',
  standalone: true,
  imports: [],
  templateUrl: './card-big.component.html',
  styleUrl: './card-big.component.css'
})
export class CardBigComponent {
  @Input()
  card_big_image: string = ''
  @Input()
  card_big_image_sub: string = ''
  @Input()
  card_big_title: string = ''
  @Input()
  card_big_desc: string = ''
}
