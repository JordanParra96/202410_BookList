import { Component, Input, OnInit } from '@angular/core';
import { AuthorDetail } from '../author-detail';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  @Input() authorDetail!: AuthorDetail;

  constructor(private authorService: AuthorService
  ) {}


  ngOnInit() {
    
  }
}
