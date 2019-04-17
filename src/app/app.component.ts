import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataServiceService } from './services/data-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ng-hidive';

  Object = Object;
  public dataNames = [
    'Continue Watching',
    'My Queue',
    'Simulcasts',
    'My Favorites',
    'Dubs',
    'Exclusives',
    'Recently Added',
    'Trending Now',
    'Like Saiyuki Gaiden',
    'Most Popular',
  ];
  public dataObjects: any = {};

  private subs: Subscription[] = [];

  constructor(
    private dataService: DataServiceService,
  ) {}

  public ngOnInit() {
    this.splitData();
  }

  public splitData() {
    this.dataNames.forEach((topic) => {
      this.dataService.getData().subscribe((data) => {
        this.dataObjects[topic] = data.Data.TitleRows.find((group) => {
          return group.Name === topic;
        });
      });
    });
  }

  public ngOnDestroy() {
    this.subs.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
