import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { RadioButtonComponent } from "./ui-elements/radio-button/radio-button.component";

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    exports: [
        RadioButtonComponent
    ],
    declarations: [
        RadioButtonComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule { }
