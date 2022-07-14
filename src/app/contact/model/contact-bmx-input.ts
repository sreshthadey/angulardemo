import {BmxTextInput} from "ngx-bmx-components";
import {BmxContactInput} from "ngx-bmx-components";
import { BmxContentInput } from "ngx-bmx-components/lib/bmx/bmx-input/interface/bmx-content-input";

export class ContactBmxInput {

    public static nameInput : BmxContentInput = BmxTextInput.getInstance(
        'Name',
		'Enter your name',
        'name',
		'Sreshtha Dey',
		'Joe Billy',
    )

    public static contactInput : BmxContentInput = BmxContactInput.getInstance(
        'Phone Number',
		'Enter your phone number',
		'phone',
		'',
		'+919831126234'
    )
}