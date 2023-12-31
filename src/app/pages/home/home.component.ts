import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { CardBigComponent } from "../../components/card-big/card-big.component";
import { CardSmallComponent } from "../../components/card-small/card-small.component";
import { ActivatedRoute } from '@angular/router';
import { fakeData } from '../../data/fakedata';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        MenuBarComponent,
        MenuTitleComponent,
        CardBigComponent,
        CardSmallComponent
    ]
})
export class HomeComponent {
  // contents = fakeData
  // id: string = ''
  // title: string = ''
  // sub: string = ''
  // photo: string = ''

  // constructor() {
  //   for (a in this.contents) {
  //     this.title = a.
  //   }
  // }
}
