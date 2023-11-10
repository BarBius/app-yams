import { Pipe, PipeTransform, Input} from '@angular/core';

@Pipe({
  name: 'pastrieTagColor'
})
export class PastryTagColorPipe implements PipeTransform {
    transform(toto: string): string {
      let cssClass: string;
  
      switch (toto) {
        case 'yummy':
          cssClass = 'yummy-badge';
          break;
        case 'sucré':
          cssClass = 'sucré-badge';
          break;
        case 'dessert':
          cssClass = 'dessert-badge';
          break;
        case 'chocolat':
          cssClass = 'chocolat-badge';
          break;
        case 'framboise':
          cssClass = 'framboise-badge';
          break;
        case 'poire':
          cssClass = 'poire-badge';
          break;
        case 'fruit':
          cssClass = 'fruit-badge';
          break;
        case 'banane':
          cssClass = 'banane-badge';
          break;
        default:
          cssClass = 'default-badge';
      }
  
      return cssClass;
    }
  }