import {
	Component,
	OnInit
} from '@angular/core';
import {
	PostService
} from '../post.service';
import {
	BlogPost
} from '../BlogPost';
import {
	ActivatedRoute
} from '@angular/router';

@Component({
	selector: 'app-post-data',
	templateUrl: './post-data.component.html',
	styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

	querySub: any;

	post: BlogPost;

	commentName: string;

	commentText: string;

	constructor(private postservice: PostService, private route: ActivatedRoute) { }

	submitComment() {
		this.post.comments.push({
			"author": this.commentName,
			"comment": this.commentText,
			"date": new Date().toLocaleDateString()
		});
		this.postservice.updatePostById(this.post._id, this.post).subscribe(() => {
			this.commentName = "";
			this.commentText = "";
		});
	}

	ngOnInit(): void {
		this.querySub = this.route.params.subscribe(params => {
			this.querySub = this.route.params.subscribe(params => {
				this.postservice.getPostbyId(params['id']).subscribe(res => {
					this.post = res;
					this.post.views = res.views + 1;
					this.postservice.updatePostById(this.post._id, this.post).subscribe();
				})
			})
		})
	}

	ngOnDestroy(): void {
		//Called once, before the instance is destroyed.
		//Add 'implements OnDestroy' to the class.
		if (this.querySub) this.querySub.unsubscribe();
	}

}