import {
  PostService
} from '../post.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Array<any>;

  constructor(private postservice: PostService) { }

  ngOnInit(): void {
    this.postservice.getCategories().subscribe(res => { this.categories = res; })
  }

}