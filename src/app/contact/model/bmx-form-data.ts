import { BmxLayout } from "ngx-bmx-components";
import { BmxInputLayoutContainer } from "ngx-bmx-components";
import { BmxSubmitButton } from "./bmx-submit-button";
import { BmxButtonLayoutContainer } from "ngx-bmx-components";
/**
 * Prepares the form data
 *
 * @interface BmxFormData
 *
 * @member title - Title of the form
 * @member subTitle - Subtitle for the form
 * @member layoutContainers - An array of {@link BmxInputRowLayout - contains elements in a row as described in an array of {@link BmxRowItem}}
 * @member layout - Description of flex layout using {@link BmxLayout}
 */
export interface BmxFormData {
    title: string;
    subTitle: string;
    layoutContainers: BmxInputLayoutContainer[];
    buttonLayout: BmxButtonLayoutContainer;
    submit: BmxSubmitButton;
    layout: BmxLayout;
}
