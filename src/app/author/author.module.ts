import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AuthorListComponent, AuthorDetailComponent]
})
export class AuthorModule { }