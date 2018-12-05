"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var nativescript_ng_shadow_1 = require("nativescript-ng-shadow");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var tour_details_component_1 = require("./tour-details/tour-details.component");
var tour_map_view_component_1 = require("./tour-map-view/tour-map-view.component");
var tours_routing_module_1 = require("./tours-routing.module");
var tours_component_1 = require("./tours.component");
var TourModule = /** @class */ (function () {
    function TourModule() {
    }
    TourModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                tours_routing_module_1.TourRoutingModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    "fa": "./assets/fonts/fontawesome.css",
                    "wi": "./assets/fonts/weather-icons.css",
                    "ma": "./assets/fonts/material-design-icons.css"
                }),
                nativescript_ng_shadow_1.NgShadowModule
            ],
            declarations: [
                tours_component_1.TourComponent,
                tour_details_component_1.TourDetailsComponent,
                tour_map_view_component_1.TourMapViewComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], TourModule);
    return TourModule;
}());
exports.TourModule = TourModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91cnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG91cnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxpRUFBd0Q7QUFDeEQsdUVBQThEO0FBQzlELGdGQUE2RTtBQUM3RSxtRkFBK0U7QUFDL0UsK0RBQTJEO0FBQzNELHFEQUFrRDtBQXVCbEQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQXJCdEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsd0NBQWlCO2dCQUNqQiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7b0JBQ3RCLElBQUksRUFBRSxnQ0FBZ0M7b0JBQ3RDLElBQUksRUFBRSxrQ0FBa0M7b0JBQ3hDLElBQUksRUFBRSwwQ0FBMEM7aUJBQ25ELENBQUM7Z0JBQ0YsdUNBQWM7YUFFakI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsK0JBQWE7Z0JBQ2IsNkNBQW9CO2dCQUNwQiw4Q0FBb0I7YUFDdkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOZ1NoYWRvd01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmctc2hhZG93XCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb25cIjtcclxuaW1wb3J0IHsgVG91ckRldGFpbHNDb21wb25lbnQgfSBmcm9tIFwiLi90b3VyLWRldGFpbHMvdG91ci1kZXRhaWxzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUb3VyTWFwVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3RvdXItbWFwLXZpZXcvdG91ci1tYXAtdmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVG91clJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi90b3Vycy1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBUb3VyQ29tcG9uZW50IH0gZnJvbSBcIi4vdG91cnMuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBUb3VyUm91dGluZ01vZHVsZSxcclxuICAgICAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcclxuICAgICAgICAgICAgXCJmYVwiOiBcIi4vYXNzZXRzL2ZvbnRzL2ZvbnRhd2Vzb21lLmNzc1wiLFxyXG4gICAgICAgICAgICBcIndpXCI6IFwiLi9hc3NldHMvZm9udHMvd2VhdGhlci1pY29ucy5jc3NcIixcclxuICAgICAgICAgICAgXCJtYVwiOiBcIi4vYXNzZXRzL2ZvbnRzL21hdGVyaWFsLWRlc2lnbi1pY29ucy5jc3NcIlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIE5nU2hhZG93TW9kdWxlXHJcblxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFRvdXJDb21wb25lbnQsXHJcbiAgICAgICAgVG91ckRldGFpbHNDb21wb25lbnQsXHJcbiAgICAgICAgVG91ck1hcFZpZXdDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG91ck1vZHVsZSB7IH1cclxuIl19