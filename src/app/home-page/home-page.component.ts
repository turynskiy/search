import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{
  searchStr2 = '';
  searchStr = '';
  onSelect;

  onSearch(){
    if (this.searchStr === '' || this.searchStr === ''){
      window.open('/error');
    } else {
      this.searchStr2 = this.searchStr.replace('&', '%26');
      window.open(this.onSelect + this.searchStr2);
    }
  }
}
