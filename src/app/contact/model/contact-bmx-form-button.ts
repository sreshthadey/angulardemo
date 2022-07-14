import {
	SimpleBmxButtonLayoutContainer
} from "ngx-bmx-components";
import {BmxButtonRowLayout} from "ngx-bmx-components";
import {BmxButtonRowItem} from "ngx-bmx-components";
import {BmxFormButton} from "ngx-bmx-components";
import {FormGroup} from "@angular/forms";
import {BmxFormButtonType} from "ngx-bmx-components";

export class ContactBmxFormButton {

	public static readonly DEFAULT_BUTTON: BmxFormButton = {
		title: 'draft',
		onSubmit: (formGroup: FormGroup) => console.error('BmxFormButton#onSubmit is not implemented!'),
		inputType: BmxFormButtonType.CONFIRM,
		validateBeforeSubmit: true
	};

	public static readonly DEFAULT_BUTTON_ROW_ITEM: BmxButtonRowItem = {
		id: 0,
		flex: 100,
		classList: [],
		buttonItem: ContactBmxFormButton.DEFAULT_BUTTON
	};

	public static readonly DEFAULT_BUTTON_ROW_LAYOUT: BmxButtonRowLayout = {
		buttonItems: [
			ContactBmxFormButton.DEFAULT_BUTTON_ROW_ITEM,
			ContactBmxFormButton.DEFAULT_BUTTON_ROW_ITEM
		]
	};

	public static contactFormButton: SimpleBmxButtonLayoutContainer = new SimpleBmxButtonLayoutContainer(
		ContactBmxFormButton.DEFAULT_BUTTON_ROW_LAYOUT
	);
}