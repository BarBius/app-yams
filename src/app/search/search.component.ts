import { Component, EventEmitter, Output } from '@angular/core';

import { PastrieService } from '../pastrie.service'
import { NgForm } from '@angular/forms';
import { Pastrie } from '../pastrie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private pastrieService: PastrieService) {}
    searchResults: Pastrie[] = []; 
    searchWord: string = '';
    @Output() searchChange = new EventEmitter<string>();
    onSubmit(form: NgForm): void {
      if (form.valid) {
        const searchWord = form.value.word;
        this.searchResults = this.pastrieService.getPastrieByName(searchWord);
      } else {
        console.log('Error');
      }
    }

    onSearchChange(event: string): void {
      this.searchChange.emit(event);
    }
}