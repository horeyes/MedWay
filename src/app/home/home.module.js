"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var common_1 = require("nativescript-angular/common");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var home_routing_module_1 = require("./home-routing.module");
var home_component_1 = require("./home.component");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_textinputlayout_1 = require("nativescript-textinputlayout");
var angular_1 = require("nativescript-ui-listview/angular");
var shared_module_1 = require("../shared/shared.module");
var modal_1 = require("./modal");
element_registry_1.registerElement("TextInputLayout", function () { return nativescript_textinputlayout_1.TextInputLayout; });
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                angular_1.NativeScriptUIListViewModule,
                nativescript_angular_1.NativeScriptFormsModule,
                home_routing_module_1.HomeRoutingModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    "fa": "./assets/fonts/fontawesome.css",
                    "wi": "./assets/fonts/weather-icons.css",
                    "ma": "./assets/fonts/material-design-icons.css"
                }),
                shared_module_1.SharedModule
            ],
            declarations: [
                home_component_1.HomeComponent,
                modal_1.ModalComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNDQUEyRDtBQUMzRCw2REFBK0Q7QUFDL0Qsc0RBQXVFO0FBQ3ZFLHVFQUFrRjtBQUNsRiw2REFBMEQ7QUFDMUQsbURBQWlEO0FBRWpELDBFQUF3RTtBQUN4RSw2RUFBK0Q7QUFDL0QsNERBQWdGO0FBQ2hGLHlEQUF1RDtBQUN2RCxpQ0FBeUM7QUFFekMsa0NBQWUsQ0FBQyxpQkFBaUIsRUFBRSxjQUFNLE9BQUEsOENBQWUsRUFBZixDQUFlLENBQUMsQ0FBQztBQXVCMUQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQXJCdEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsc0NBQTRCO2dCQUM1Qiw4Q0FBdUI7Z0JBQ3ZCLHVDQUFpQjtnQkFDakIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUN0QixJQUFJLEVBQUUsZ0NBQWdDO29CQUN0QyxJQUFJLEVBQUUsa0NBQWtDO29CQUN4QyxJQUFJLEVBQUUsMENBQTBDO2lCQUNuRCxDQUFDO2dCQUNGLDRCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOEJBQWE7Z0JBQ2Isc0JBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmRWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiO1xuXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUsIFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uXCI7XG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0IHsgVGV4dElucHV0TGF5b3V0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZXh0aW5wdXRsYXlvdXRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9tb2RhbFwiO1xuXG5yZWdpc3RlckVsZW1lbnQoXCJUZXh0SW5wdXRMYXlvdXRcIiwgKCkgPT4gVGV4dElucHV0TGF5b3V0KTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxuICAgICAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgIFwiZmFcIjogXCIuL2Fzc2V0cy9mb250cy9mb250YXdlc29tZS5jc3NcIixcbiAgICAgICAgICAgIFwid2lcIjogXCIuL2Fzc2V0cy9mb250cy93ZWF0aGVyLWljb25zLmNzc1wiLFxuICAgICAgICAgICAgXCJtYVwiOiBcIi4vYXNzZXRzL2ZvbnRzL21hdGVyaWFsLWRlc2lnbi1pY29ucy5jc3NcIlxuICAgICAgICB9KSxcbiAgICAgICAgU2hhcmVkTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgTW9kYWxDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cbiJdfQ==