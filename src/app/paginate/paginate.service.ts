
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root',
})
export class PaginationService {
constructor() {}

calculateTotalPages(totalItems: number, itemsPerPage: number): number {
    return Math.ceil(totalItems / itemsPerPage);
}
}
