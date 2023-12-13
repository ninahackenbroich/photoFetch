import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FetchPictureService } from '../fetch-picture.service';

@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.css']
})
export class DisplayPhotoComponent {
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  buttonClicked: boolean = false;

  url: string = "";

  constructor(private fetchPicture: FetchPictureService) {
    this.fetchPhoto();
  }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.fetchPicture.getPicture().subscribe({
      next: (response) => {
        // Handle the response here
        this.url = response;
      },
      error: (error) => {
        // Handle the error
        console.log(error);
      },
      complete: () => {
        // Handle the completion
        console.log('Search completed');
      }
    });
  }
}
