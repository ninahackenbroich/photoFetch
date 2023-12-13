import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface Picture {
  urls: {
    small: string;
  }
}

@Injectable({
  providedIn: 'root'
})

export class FetchPictureService {
  private url = 'https://api.unsplash.com/photos/random';
  constructor(private http: HttpClient) { }

  getPicture() {

    const headers = {
      "Accept-Version": "v1",
      "Authorization": "Client-ID rAFVpk0e_itwLWDjEDcGlZ8Ttbqz3M23K_G1Xjkaxmc"
    };
    return this.http.get<Picture>(this.url, { headers: headers })
      .pipe(
        pluck('urls', 'small')
      );
  }
};
