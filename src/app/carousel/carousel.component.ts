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

  public shows: any = [];
  public name: string = '';

  constructor() { }

  ngOnInit() {
    this.shows = this.data.Titles;
    this.name = this.carouselName.toLowerCase().replace(/\s+/g, '');
    this.carouselName = this.carouselName.toUpperCase();
    // console.log(this.data.Titles);
  }

  public separateShows() {
    // let keys =
  }

}
