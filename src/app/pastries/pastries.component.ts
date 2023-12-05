import { Component, OnInit } from '@angular/core';
import { Pastrie } from '../pastrie';
import { PastrieService } from '../pastrie.service';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit {
  titlePage: string = "Liste des pâtisseries à gagner";
  pastries!: Pastrie[];
  selectedPastrie?: Pastrie;
  priority: string[] = [];
  canChoice: boolean = true;
  searchResults: any;
  paginatedPastries: Pastrie[] = [];
  perPage: number = 5;
  currentPage: number = 1; 

  constructor(private pastrieService: PastrieService) { }

  ngOnInit(): void {
    this.loadPastries();
    this.updatePage(1);
  }

  loadPastries(): void {
    this.pastries = this.pastrieService.getPastries();
  }

  OnSelect(pastrie: Pastrie) {
    this.selectedPastrie = pastrie;
  }

  changeParentPreference(event: string) {
    this.priority?.push(event);
    if (this.priority.length === 3) {
      this.canChoice = false;
    }
  }

  filtredPastries(searchWord: string): void {
    this.pastries = this.pastrieService.getPastrieByName(searchWord);
    this.updatePage(1);
  }

  updatePage(newPage: number): void {
    const startIndex = (newPage - 1) * this.perPage;
    const endIndex = startIndex + this.perPage;
    this.paginatedPastries = this.pastries.slice(startIndex, endIndex);
  }
}
