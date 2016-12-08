import {Headers} from "@angular/http";
/**
 * Created by IgorK on 08/12/2016.
 */


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
      this.loading = false;
    });
}
// http://jsonplaceholder.typicode.com/posts/1
makeDelete(): void {
  this.loading = true;
  this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
    .subscribe((res: Respnose) => {
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
