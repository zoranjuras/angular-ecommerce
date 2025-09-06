import { FormControl, ValidationErrors } from "@angular/forms";

export class ShopValidators {

    // whitespace validation
    static notOnlyWhiteSpace(control: FormControl): ValidationErrors {
        
        // check if the string only contains whitespaces
        if (control.value != null && control.value.trim().length === 0) {

            // invalid, return error object
            return {'notOnlyWhiteSpace': true};
        }
        else {
            // valid, return null
            return null;
        }

    }
}
