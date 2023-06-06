import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {Subject, takeUntil} from "rxjs";
import {Video} from "../../model/video";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  videos: Video[] = [];
  private videoSubscriptionDestroy$ = new Subject<void>();

  constructor(
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.loadVideos();

  }

  ngOnDestroy() {
    /** Destroy subscription */
    this.videoSubscriptionDestroy$.next();
    this.videoSubscriptionDestroy$.complete();
  }

  /** Load all videos from API */
  loadVideos() {
    this.apiService.getVideos().pipe(takeUntil(this.videoSubscriptionDestroy$)).subscribe(
      response => {
        if ( response ) {
          this.videos = response;
          console.info('API response results: ', this.videos);
        }

      },
      error => {
        console.error('API response error: ', error);
      }
    );
  }

}
