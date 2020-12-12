import {
  PostService
} from '../post.service';
import {
  Component, OnInit
} from '@angular/core';
import {
  ActivatedRoute, Router
} from '@angular/router';
import {
  BlogPost
} from '../BlogPost';
import {
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  blogPost: BlogPost;
  tags: string;
  constructor(private postservice: PostService, private route: ActivatedRoute, private Router: Router) { }

  formSubmit() {
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());
    this.postservice.updatePostById(this.blogPost._id, this.blogPost).subscribe(() => {
      console.log("updatePostById...");
      this.Router.navigate(['admin']);
    });
  }

  deletePost() {
    this.postservice.deletePostById(this.blogPost._id).subscribe(() => {
      console.log("deletePostById");
      this.Router.navigate(['admin']);
    });
  }

  ngOnInit(): void {
    this.postservice.getPostbyId(this.route.snapshot.params['id']).subscribe((res) => {
      this.blogPost = res;
      this.tags = this.blogPost.tags.toString();
    });
  }

}
