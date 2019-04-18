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
  public wantedData = [
    'Free Episodes',
    'Simulcasts',
    'Dubs',
    'Exclusives',
    'Recently Added',
    'Trending Now',
    'Most Popular'
  ];
  public dataObjects: any = {};

  public bigCarouselImages: any = [
    "d10xkldqejj5hr.cloudfront.net/slides/2019/03/HIDIVE_HOMEcarousel_PastelMem3_IOS_idea.png",
    "d10xkldqejj5hr.cloudfront.net/slides/2019/04/HIDIVE_HOMEcarousel_Spring2019_1250x500_Fish.png",
    "d10xkldqejj5hr.cloudfront.net/slides/2019/01/HIDIVE_HOMEcarousel_20percentOff_Promo UPDATED.gif",
  ];

  private subs: Subscription[] = [];

  constructor(
    private dataService: DataServiceService,
  ) {}

  public ngOnInit() {
    this.splitData();
    console.log(this.dataObjects, this.wantedData);
  }

  public splitData() {
    this.dataService.getData().subscribe((data) => {
      this.wantedData.forEach((topic) => {
        if (topic !== 'Free Episodes') {
          this.dataObjects[topic] = data.Data.TitleRows.find((group) => {
            return group.Name === topic;
          });
        }
      });
      this.dataObjects['Free Episodes'] = data.Data.TitleRows.find((group) => {
        return group.Name === 'Continue Watching';
      });
    });
  }

  public ngOnDestroy() {
    this.subs.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
