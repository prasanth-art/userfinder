import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private Profile: ProfileService, private snackbar: MatSnackBar) { }
  title = 'Git Hub Profile Viewer';
  name = '';
  data: any;
  showspinner = false;    // spinner
  imageview = false;      // to display image
  res: any;               // to store response value and check localStorage
  onKeydown(event) {
    if (event.keyCode === 13) {
    this.search();
  }
}
    search() {
        const data = localStorage.getItem(this.name);
        if (data) {
          this.res = JSON.parse(data);
          console.log(this.res);
          this.imageview = true;      // display image if data in localStorage
          this.showspinner = false;
        } else {
      this.showspinner = true;
      this.Profile.find(this.name).subscribe(Response => {
        this.res = Response;
        console.log(this.res);
        localStorage.setItem(this.name, JSON.stringify(this.res));      // setting local storage
        this.imageview = true;
        this.showspinner = false;

      }, err => {                               // if name is invalid err executes
        this.imageview = false;
        this.showspinner = false;
        this.snackbar.open('No data Found', 'Dismiss', {duration : 4000});      // triggers snackbar if invalid
      });

    }
  }


  ngOnInit() {
  }

}
