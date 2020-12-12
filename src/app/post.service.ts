import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  BlogPost
} from './BlogPost';

const perPage = 6;

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }

  base = "https://assign5prabh.herokuapp.com/api/";

  getPosts(page, tag, category): Observable<BlogPost[]> {
    let gpUrl = this.base + "posts?page=" + page + "&perPage=" + perPage;

    if (tag != null || tag != undefined) {
      gpUrl = gpUrl + "&tag=" + tag;
    }
    if (category != null || category != undefined) {
      gpUrl = gpUrl + "&category=" + category;
    }

    return this.http.get<BlogPost[]>(gpUrl);
  }

  getPostbyId(id): Observable<BlogPost> {
    return this.http.get<BlogPost>(this.base + "posts/" + id);
  }

  getCategories(): Observable<any> {
    return this.http.get(this.base + "categories");
  }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>(this.base + "tags");
  }

  getAllPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.base + "posts?page=1&perPage=" + Number.MAX_SAFE_INTEGER);
  }

  newPost(data: BlogPost): Observable<any> {
    return this.http.post<any>(this.base + "posts", data);
  }

  updatePostById(id: string, data: BlogPost): Observable<any> {
    return this.http.put<any>(this.base + "posts/" + id, data);
  }

  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(this.base + "posts/" + id);
  }
}
