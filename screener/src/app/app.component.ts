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
  readonly github_url = 'https://api.github.com';
  readonly clientID = 'cd50000a794e64f34cb7';
  readonly clientSecret = '4dd1342dc309538c4802bf549ed8a11ab7566a58';
  constructor(private http: HttpClient) {}

  posts: Observable<any>;
  message: Observable<any>;
  getDummyPosts() {
    console.log('Called GetDummyPosts')
    const headers = new HttpHeaders().set('Authorization', 'auth-token');
    const params = new HttpParams().set('userId', '1');
    this.posts = this.http.get(this.ROOT_URL + '/posts', {headers}, {params})
  }

  getGithubPosts() {
    console.log('Called GetGithubPosts')
    const headers = new HttpHeaders().set('Authorization', this.oauthtoken);
    this.message = this.http.get(this.github_url + '/users/8bitOctoCat/repos?client_id ='+
    this.clientID+'&client_secret='+this.clientSecret)
    this.message.subscribe(res => {
      console.log(res)
      this.message = res;
    })
  }

  createDummyPost() {
    const data = {
      id: null,
      userId: 23,
      title: 'My New Post',
      body: 'Hello World!'
    }

    this.newPost = this.http.post(this.ROOT_URL + '/posts', data)
  }
}
