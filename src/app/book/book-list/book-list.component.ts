import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  selectedBook!: Book;
  selected: Boolean = false;
  books: Array<Book> = []; 
  
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  onSelected(book: Book): void {
    this.selected = true;
    this.selectedBook = book;
  }


}
