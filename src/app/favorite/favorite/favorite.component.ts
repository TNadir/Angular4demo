import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class FavoriteComponent implements OnInit {
  @Input('choose') isFavorite: boolean;
  @Output('change') event = new EventEmitter();

  constructor() {
  }


  ngOnInit() {
  }


  onClick() {
    this.isFavorite = !this.isFavorite;
    this.event.emit({ newValue: this.isFavorite });
  }

}

export interface FavoruteChangeEventArgs {
  newValue: boolean
}