import { PostService } from '../post.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: Array<string>;

  constructor(private postservice: PostService) { }

  ngOnInit(): void {
    this.postservice.getTags().subscribe((res) => { this.tags = res; })
  }

}