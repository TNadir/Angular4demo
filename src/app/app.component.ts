import { Component } from '@angular/core';
import { FavoruteChangeEventArgs } from './favorite/favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post = {
    title: "Title",
    isFavorite: false
  }

  onFavoriteChange(eventArgs:FavoruteChangeEventArgs) {
    console.log('changed', eventArgs.newValue);
  }

}
