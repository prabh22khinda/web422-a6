import {
  Component, OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  PostService
} from '../post.service';
import {
  BlogPost
} from '../BlogPost';
import {
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  blogPost: BlogPost = new BlogPost();
  tags: string;
  constructor(private postservice: PostService, private Router: Router) { }

  formSubmit() {
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());
    this.blogPost.isPrivate = false;
    this.blogPost.postDate = new Date().toLocaleDateString();
    this.blogPost.postedBy = "WEB422 Student";
    this.blogPost.views = 0;
    this.postservice.newPost(this.blogPost).subscribe(() => {
      this.Router.navigate(['admin']);
    });
  }

  ngOnInit(): void {
  }

}
