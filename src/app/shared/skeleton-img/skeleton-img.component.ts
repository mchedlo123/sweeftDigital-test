import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-skeleton-img',
  templateUrl: './skeleton-img.component.html',
  styleUrls: ['./skeleton-img.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkeletonImgComponent implements OnInit {
  @Input() isBoxes: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
