import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{
  searchStr = '';
  onSelect;
  onSearch(){
    if (this.searchStr === '' || this.searchStr === ''){
      window.open('/error');
    } else {
      window.open(this.onSelect + this.searchStr);
    }
  }
}
