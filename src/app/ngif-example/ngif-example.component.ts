import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-example',
  templateUrl: './ngif-example.component.html',
  styleUrls: ['./ngif-example.component.css']
})
export class NgifExampleComponent {
  public lightsOn = false;

  flipSwitch()
  {
      this.lightsOn = !this.lightsOn;
  }
}
