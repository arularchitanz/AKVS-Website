<<<<<<< HEAD
import { Component, OnInit, AfterViewInit } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 1b85c35bbb8566e9421bf323cbdb00a73a1b8de6

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
<<<<<<< HEAD
export class GalleryComponent implements OnInit, AfterViewInit {
=======
export class GalleryComponent implements OnInit {

>>>>>>> 1b85c35bbb8566e9421bf323cbdb00a73a1b8de6
  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  ngAfterViewInit() {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  }
=======
>>>>>>> 1b85c35bbb8566e9421bf323cbdb00a73a1b8de6
}
