import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {User} from "../user.model";
import {mainService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
// @ts-ignore
  userDate: User[];
  allUser: any = [];
  page: number = 1;
  size: number = 7;
  isLargeSize: number = 0;

  isLoaded: boolean = true;
  constructor(
    private _mainService: mainService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (window.innerHeight > 722 && window.innerWidth > 1536) {
      this.isLargeSize = 0.8;
    }

    this._mainService.getAllDate(this.page, this.size)
      .subscribe(
      (date: User[]) => {
        setTimeout( () => {
          this.isLoaded = false;
        }, 1500)
        this.userDate = date;
        this.allUser.push(this.userDate);
        this.router.navigate(['home', this.page]);
      }
    );
  }

  @ViewChild('testDiv', { static: false })
  // @ts-ignore
  private testDiv: ElementRef<HTMLDivElement>;
  // @ts-ignore
  isTestDivScrolledIntoView: boolean;

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if (this.testDiv) {
      const rect = this.testDiv.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight + this.isLargeSize;
      this.isTestDivScrolledIntoView = topShown && bottomShown;
      if (this.isTestDivScrolledIntoView) {
        this.page = this.page + 1;
        console.log(this.isTestDivScrolledIntoView);
        this._mainService.getAllDate(this.page, this.size).subscribe(
          (date: User[]) => {
            this.userDate = date;
            this.allUser.push(this.userDate);
            this.router.navigate(['home', this.page]);
          }
        );
      }
    }
  }
}
