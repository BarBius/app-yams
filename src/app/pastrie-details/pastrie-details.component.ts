import { Component, Input, OnChanges, OnInit, Output, EventEmitter} from '@angular/core';
import { List, Pastrie } from '../pastrie';
import { PastrieService } from '../pastrie.service';

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnChanges {
  @Input() pastrie?: Pastrie;
  @Input() enableChoiceBt: boolean = true;
  ingredientsList?: string[];
  @Output() changePreference: EventEmitter<string> = new EventEmitter();

  constructor(private pastrieService: PastrieService) { }

  ngOnChanges() {
    if(this.pastrie?.id) this.ingredientsList = this.pastrieService.getPastrieIngredientsList(this.pastrie?.id)
  }
  preference(id: string | undefined) {
    if(id) this.changePreference.emit(id);
  }
}
