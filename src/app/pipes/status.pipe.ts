import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../enums/status.enum';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  /**
   * Returns the status in text in case it exists, otherwise
   * it returns unknown
   */
  transform(value: number): string {
    return Status[value]? Status[value]:'unknown';
  }
}
