import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input('carousel-name')
  public carouselName: string;

  @Input('data')
  public data: any;

  @Input('cat-length')
  public catLength: number;

  public dataToUse: any = [];
  public shows: any = [];
  public name: string = '';
  public selectedShow: any;

  constructor() { }

  ngOnInit() {
    this.catLength = this.data.Titles.length;
    this.name = this.carouselName.toLowerCase().replace(/\s+/g, '');
    this.carouselName = this.carouselName.toUpperCase();
    this.modData();
  }

  public modData() {
    let shows = this.data.Titles;
    if (shows.length > 15) {
      this.dataToUse.push(shows.slice(0, 5));
      this.dataToUse.push(shows.slice(5, 10));
      this.dataToUse.push(shows.slice(10, 15));
    }
    if (shows.length >= 10 && shows.length < 15) {
      this.dataToUse.push(shows.slice(0, 5));
      this.dataToUse.push(shows.slice(5, 10));
      this.dataToUse.push(shows.slice(10, shows.length));
    }
    if (shows.length >= 5 && shows.length < 10) {
      this.dataToUse.push(shows.slice(0, 5));
      this.dataToUse.push(shows.slice(5, shows.length));
    }
    if (shows.length < 5) {
      this.dataToUse.push(shows.slice(0, shows.length));
    }
  }

  public setSelectedShow(show: any) {
    this.selectedShow = show;
  }
}
