import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  contactDetails = {
    name: 'Sajith M',
    city: 'Bangalore',
  };

  updateAddress() {
    this.contactDetails.city = 'Vienna';
  }
}
