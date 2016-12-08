/**
 * Created by IgorK on 07/12/2016.
 */
import {Component} from '@angular/core'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map';
@Component({
  selector: 'simple-http',
  template: `
  <h2>Basic request</h2>
  <button type="button" (click)="makeRequest()">Make Request</button><br>
  <button type="button"(click)="makePost()">Post</button><br>
  <button type="button"(click)="makeDelete()">Delete</button><br>
      <button type="button"(click)="makeHeaders()">Headers</button><br>

  <div *ngIf="loading">loading...</div>
  <pre>{{ data | json}}</pre>
`
})
export class SimpleHTTPComponent {
  data: Object;
  status: Object;
  loading: boolean;
  constructor(private http: Http) {

  }


  makeRequest(): void {
    this.loading = true;
    var headers = new Headers();
    this.http.get('http://jsonplaceholder.typicode.com/posts/1').map(res => res.json()).subscribe( data => {
        console.log("raw item", data);

        this.data = data;
        this.loading = false
      },
      err => {
        console.log("raw err", err);
        this.status = err;
    });



  }
  makePost(): void {
    this.loading = true;
    this.http.post(
      'http://jsonplaceholder.typicode.com/posts',
      JSON.stringify({
        body: 'bar',
        title: 'foo',
        userId: 1
      }))
      .subscribe((res: Response) => {
        this.data = res.json();
        console.log("raw item", this.data);

        this.loading = false;
      });
  }
// http://jsonplaceholder.typicode.com/posts/1
  makeDelete(): void {
    this.loading = true;
    this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }

  makeHeaders(): void {
    let headers: Headers = new Headers();
    headers.append('X-API-TOKEN','ng-book');
    let opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    this.http.get('http://jsonplaceholder.typicode.com/posts/1', opts)
      .subscribe((res: Response) => {
        this.data = res.json();
      });
  }

}
