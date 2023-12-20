import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from '../../data/fakedata';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  content_cover: string = ''
  content_title = ''
  content_text = ''
  private id: string | null= "0"

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
      )
    this.setComponentValues(this.id)
    }

  setComponentValues(id:string | null) {
    const result = fakeData.filter(article => article.id == id)[0]

    if (result){
      this.content_title = result.title
      this.content_cover = result.photo
      this.content_text = result.description
    }
  }
}
