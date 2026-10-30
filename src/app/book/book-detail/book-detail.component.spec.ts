/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookDetailComponent } from './book-detail.component';
import { Editorial } from '../../editorial/editorial';
import { faker } from '@faker-js/faker';
import { Author } from '../../author/Author';
import { BookDetail } from '../BookDetail';
import { Review } from '../Review';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ BookDetailComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
   fixture = TestBed.createComponent(BookDetailComponent);
   component = fixture.componentInstance;


   const editorial = new Editorial(
    faker.number.int(),
     faker.lorem.sentence()
   );


   const authors: Author[] = [];
   for (let i = 0; i < 3; i++) {
    const author = new Author (
      faker.number.int(),
      faker.lorem.sentence(),
      faker.number.int(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
    );
    authors.push(author);
  }

   const reviews: Review[] = [];
   for (let i = 0; i < 3; i++) {
    const review = new Review (
      faker.number.int(),
      faker.lorem.word(),
      faker.lorem.sentence(),
      faker.lorem.paragraph(),
    );
    reviews.push(review);
  }


   component.bookDetail= new BookDetail(
       faker.number.int(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.image.url(),
       faker.date.past(),
       editorial,
       authors,
       reviews
     );


   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it('should have a p.h3.p-3 element with bookDetail.name', () => {
   const element: HTMLElement = debug.query(By.css('p.h3.p-3')).nativeElement;
   expect(element.textContent).toContain(component.bookDetail.name);
 });

 it('should have an img element with src= bookDetail.image', () => {
   expect(debug.query(By.css('img')).attributes['src']).toEqual(
     component.bookDetail.image
   );
 });

 it('should have an img element with alt= bookDetail.name', () => {
   expect(debug.query(By.css('img')).attributes['alt']).toEqual(
     component.bookDetail.name
   );
 });

 it('should have 4 <dd> elements', () => {
   expect(debug.queryAll(By.css('dd.caption'))).toHaveSize(4)
 });

 it('should have one dd tag for component.bookDetail.isbn', () => {
   const allDt : DebugElement[] = debug.queryAll(By.css('dt'));
   const node = allDt.find((value) => {
     return value.nativeElement.textContent == 'ISBN';
   });
   expect(node?.nativeElement.nextSibling.textContent).toContain(component.bookDetail.isbn);
 });

 it('should have one dd tag for component.bookDetail.publishingDate', () => {
   const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
   const node = allDt.find((value) => {
     return value.nativeElement.textContent == 'Publishing Date';
   });
   expect(node?.nativeElement.nextSibling.textContent).toContain(component.bookDetail.publishingDate);
 });

 it('should have one dd tag for component.bookDetail.editorial.name', () => {
   const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
   const node = allDt.find((value) => {
     return value.nativeElement.textContent == 'Editorial';
   });
   expect(node?.nativeElement.nextSibling.textContent).toContain(component.bookDetail.editorial.name);
 });

 it('should have 3 <dd.review> elements', () => {
   expect(debug.queryAll(By.css('dd.review'))).toHaveSize(3)
 });

 it('should show the name, description and source of each review', () => {
   debug.queryAll(By.css('dd.review')).forEach((dd, i) => {
     const review = component.bookDetail.reviews[i];
     expect(dd.query(By.css('.review-name')).nativeElement.textContent).toContain(review.name);
     expect(dd.query(By.css('.review-description')).nativeElement.textContent).toContain(review.description);
     expect(dd.query(By.css('.review-source')).nativeElement.textContent).toContain(review.source);
   });
 });

});
