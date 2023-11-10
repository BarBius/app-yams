import { Component, OnInit } from '@angular/core';
import { Pastrie } from '../pastrie';
import { PastrieService } from '../pastrie.service'

@Component({
    selector: 'app-pastries',
    templateUrl: './pastries.component.html',
    styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit {
    titlePage: string = "Liste des pâtisseries à gagner";
    pastries: Pastrie[];
    selectedPastrie?: Pastrie;
    priority:string[] = [];
    canChoice: boolean = true;
    searchResults: any;
    
    constructor(private pastrieService: PastrieService) { 
      this.pastries = pastrieService.getPastries()
    }
    
    ngOnInit(): void { 
      this.pastries = this.pastrieService.getPastries();
      console.log("le nombre de patisserie :",this.pastrieService.count()) 
    }
    
    OnSelect(pastrie: Pastrie) {
      console.log(pastrie);
      this.selectedPastrie = pastrie;
    }

    changeParentPreference(event:string){
      this.priority?.push(event);
      if(this.priority.length === 3) {
        this.canChoice = false;
      }
    }

    filtredPastries(searchWord: string): void {
      this.pastries = this.pastrieService.getPastrieByName(searchWord);
    }
}