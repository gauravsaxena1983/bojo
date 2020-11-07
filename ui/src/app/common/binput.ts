import { Input } from '@angular/core';

import { BObjectField } from './bobject-meta';


export class BInput {

    @Input() field: BObjectField;

    @Input() data: any;

    constructor() { }

}
