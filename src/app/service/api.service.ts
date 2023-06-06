import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Video} from "../model/video";

// const API_URL = 'https://list.ly/api/v4/search/video?q=basketball';
const API_URL = 'https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) {
  }

  /** Get all videos from API */
  getVideos(): Observable<Video[]> {
    return this._http.get<Video[]>(API_URL);
  }
}
