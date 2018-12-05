import { CardView } from "nativescript-cardview";

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TNSFontIconModule, TNSFontIconService } from "nativescript-ngx-fonticon";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

import { registerElement } from "nativescript-angular/element-registry";
import { TextInputLayout } from "nativescript-textinputlayout";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { SharedModule } from "../shared/shared.module";
import { ModalComponent } from "./modal";

registerElement("TextInputLayout", () => TextInputLayout);

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        NativeScriptFormsModule,
        HomeRoutingModule,
        TNSFontIconModule.forRoot({
            "fa": "./assets/fonts/fontawesome.css",
            "wi": "./assets/fonts/weather-icons.css",
            "ma": "./assets/fonts/material-design-icons.css"
        }),
        SharedModule
    ],
    declarations: [
        HomeComponent,
        ModalComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
