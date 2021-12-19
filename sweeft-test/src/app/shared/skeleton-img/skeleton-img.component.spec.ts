import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonImgComponent } from './skeleton-img.component';

describe('SkeletonImgComponent', () => {
  let component: SkeletonImgComponent;
  let fixture: ComponentFixture<SkeletonImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
