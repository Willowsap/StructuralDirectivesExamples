import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-example',
  templateUrl: './ngfor-example.component.html',
  styleUrls: ['./ngfor-example.component.css']
})
export class NgforExampleComponent {
  public myFavoriteCats = ["Yuri", "Merida", "Jackie", "Fluff", "Purrsephone"];
  
  move(index: number) {
    let cat = this.myFavoriteCats[index];
    for (let i = index; i > 0; i--)
    {
      this.myFavoriteCats[i] = this.myFavoriteCats[i - 1];
    }
    this.myFavoriteCats[0] = cat;
}
}
