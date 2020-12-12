import {
	Component,
	OnInit
} from '@angular/core';
import {
	ActivatedRoute
} from '@angular/router';
import {
	BlogPost
} from '../BlogPost';
import {
	PostService
} from '../post.service';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

	blogPosts: Array<BlogPost>;
	page: number = 1;
	tag: string = null;
	category: string = null;
	querySub: any;

	constructor(private postservice: PostService, private route: ActivatedRoute) { }

	getPage(num) {
		this.postservice.getPosts(num, this.tag, this.category).subscribe((res) => {
			if (res.length > 0) {
				this.blogPosts = res;
				this.page = num;
			}
		});
	}

	ngOnInit(): void {
		this.querySub = this.route.queryParams.subscribe(params => {
			if (params['tag']) {
				this.tag = params['tag'];
				this.category = null;
			} else {
				this.tag = null;
			}
			if (params['category']) {
				this.category = params['category'];
				this.tag = null;
			} else {
				this.category = null;
			}
			this.getPage(+params['page'] || 1);
		});
	}

	ngOnDestroy(): void {
		//Called once, before the instance is destroyed.
		//Add 'implements OnDestroy' to the class.
		if (this.querySub) this.querySub.unsubscribe();
	}

}