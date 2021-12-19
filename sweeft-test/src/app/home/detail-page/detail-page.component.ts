import {Component, DoCheck, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {mainService} from "../../service/user.service";
import {CertainUser, User, UserObj} from "../../user.model";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit, DoCheck {
  // @ts-ignore
  userId = this.route.url._value[2].path;
  page: number = 1;
  size: number = 7;
  // @ts-ignore
  user: CertainUser;
  // @ts-ignore
  friend: User[];
  allUser: any = [];
  isLargeSize: number = 0;

  isLoaded: boolean = true;

  testArrForFriendsName: CertainUser[] = [];
  friendsName: CertainUser[] = [];

  constructor(
    private route: ActivatedRoute,
    private _mainService: mainService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (window.innerHeight > 722 && window.innerWidth > 1536) {
      this.isLargeSize = 0.8;
    }

    this._mainService.getUser(this.userId).subscribe(
      (date: CertainUser) => {
        setTimeout(() => {
          this.isLoaded = false;
        }, 1500)
        this.user = date;
      }
    )
    this._mainService.getFriends(this.userId, this.page, this.size)
      .subscribe(
        (date: User[]) => {
          this.friend = date;
          this.allUser.push(this.friend);
        }
      )
  }

  ngDoCheck() {
    // @ts-ignore
    this.userId = this.route.url._value[2].path;
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
        this._mainService.getFriends(this.userId, this.page, this.size).subscribe(
          (date: User[]) => {
            this.friend = date;
            this.allUser.push(this.friend);
          }
        );
      }
    }
  }

  friendDetail(id: number) {
    this._mainService.getUser(id)
      .subscribe(
        (date:CertainUser) => {
          this.user = date;
          this.router.navigate(['home/user', id]);
          this.testArrForFriendsName.push(this.user);
          const key = 'id';
          this.friendsName = [...new Map(this.testArrForFriendsName.map(item =>
            [item[key], item])).values()];

        }
      )
    console.log(this.userId);
      this._mainService.getFriends(this.userId, this.page, this.size).subscribe(
        (date: User[]) => {
          this.friend = date;
          this.allUser = [];
          this.allUser.push(this.friend);
        }
      )
  }
}
