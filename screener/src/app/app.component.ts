import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Screener';
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  posts: Observable<any>;
  getPosts() {
    console.log('Called GetPosts')
    this.posts = this.http.get(this.ROOT_URL + '/posts')
  }

  createPost() {
    const data = {
      id: null,
      userId: 23,
      title: 'My New Post',
      body: 'Hello World!'
    }

    this.newPost = this.http.post(this.ROOT_URL + '/posts', data)
  }
}
