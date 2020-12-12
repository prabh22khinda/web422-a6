import {
	Component,
	OnInit
} from '@angular/core';
import {
	PostService
} from '../post.service';
import {
	BlogPost
} from "../BlogPost";

@Component({
	selector: 'app-latest-posts',
	templateUrl: './latest-posts.component.html',
	styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {

	posts: Array<BlogPost>;

	constructor(private postservice: PostService) { }

	ngOnInit(): void {
		this.postservice.getPosts(1, null, null).subscribe((res) => { this.posts = res.slice(0, 3) })
	}

}