import { FormControl } from '@angular/forms';

export class DateValidator {
  constructor() {}

  static usDate(control: FormControl): { [key: string]: any } {
    let usDatePattern = /^02\/(?:[01]\d|2\d)\/(?:19|20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:19|20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:19|20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:19|20)\d{2}$/;

    if (!control.value.match(usDatePattern)) return { usDate: true };

    return null;
  }
}
