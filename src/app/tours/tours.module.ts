import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgShadowModule } from "nativescript-ng-shadow";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { TourDetailsComponent } from "./tour-details/tour-details.component";
import { TourMapViewComponent } from "./tour-map-view/tour-map-view.component";
import { TourRoutingModule } from "./tours-routing.module";
import { TourComponent } from "./tours.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TourRoutingModule,
        TNSFontIconModule.forRoot({
            "fa": "./assets/fonts/fontawesome.css",
            "wi": "./assets/fonts/weather-icons.css",
            "ma": "./assets/fonts/material-design-icons.css"
        }),
        NgShadowModule

    ],
    declarations: [
        TourComponent,
        TourDetailsComponent,
        TourMapViewComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TourModule { }
