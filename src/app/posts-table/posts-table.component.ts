import {
  Component, OnInit
} from '@angular/core';
import {
  PostService
} from '../post.service';
import {
  Router
} from '@angular/router';
import {
  BlogPost
} from '../BlogPost';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit {

  blogPosts: Array<BlogPost> = [];

  constructor(private postservice: PostService, private Router: Router) { }

  clickRow(id) {
    this.Router.navigate(['/admin/post/' + id]);
  }

  ngOnInit(): void {
    this.postservice.getAllPosts().subscribe((res) => { this.blogPosts = res; });
  }

}
