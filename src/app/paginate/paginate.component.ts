import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent {
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 5;
  @Input() totalItems: number = 0; 
  @Output() pageChanged = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page; 
      this.pageChanged.emit(this.currentPage);
    }
  }
}
