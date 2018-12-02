"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_cardview_1 = require("nativescript-cardview");
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var home_routing_module_1 = require("./home-routing.module");
var home_component_1 = require("./home.component");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_textinputlayout_1 = require("nativescript-textinputlayout");
var angular_1 = require("nativescript-ui-listview/angular");
var shared_module_1 = require("../shared/shared.module");
element_registry_1.registerElement("CardView", function () { return nativescript_cardview_1.CardView; });
element_registry_1.registerElement("TextInputLayout", function () { return nativescript_textinputlayout_1.TextInputLayout; });
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                angular_1.NativeScriptUIListViewModule,
                home_routing_module_1.HomeRoutingModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    "fa": "./assets/fonts/fontawesome.css",
                    "wi": "./assets/fonts/weather-icons.css",
                    "ma": "./assets/fonts/material-design-icons.css"
                }),
                shared_module_1.SharedModule
            ],
            declarations: [
                home_component_1.HomeComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUFpRDtBQUVqRCxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLHVFQUFrRjtBQUNsRiw2REFBMEQ7QUFDMUQsbURBQWlEO0FBRWpELDBFQUF3RTtBQUN4RSw2RUFBK0Q7QUFDL0QsNERBQWdGO0FBQ2hGLHlEQUF1RDtBQUV2RCxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsZ0NBQVEsRUFBUixDQUFRLENBQUMsQ0FBQztBQUM1QyxrQ0FBZSxDQUFDLGlCQUFpQixFQUFFLGNBQU0sT0FBQSw4Q0FBZSxFQUFmLENBQWUsQ0FBQyxDQUFDO0FBcUIxRDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBbkJ0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QixzQ0FBNEI7Z0JBQzVCLHVDQUFpQjtnQkFDakIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUN0QixJQUFJLEVBQUUsZ0NBQWdDO29CQUN0QyxJQUFJLEVBQUUsa0NBQWtDO29CQUN4QyxJQUFJLEVBQUUsMENBQTBDO2lCQUNuRCxDQUFDO2dCQUNKLDRCQUFZO2FBQ2I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmRWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiO1xuXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSwgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb25cIjtcbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBUZXh0SW5wdXRMYXlvdXQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRleHRpbnB1dGxheW91dFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5cbnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IENhcmRWaWV3KTtcbnJlZ2lzdGVyRWxlbWVudChcIlRleHRJbnB1dExheW91dFwiLCAoKSA9PiBUZXh0SW5wdXRMYXlvdXQpO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBIb21lUm91dGluZ01vZHVsZSxcbiAgICAgICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICBcImZhXCI6IFwiLi9hc3NldHMvZm9udHMvZm9udGF3ZXNvbWUuY3NzXCIsXG4gICAgICAgICAgICBcIndpXCI6IFwiLi9hc3NldHMvZm9udHMvd2VhdGhlci1pY29ucy5jc3NcIixcbiAgICAgICAgICAgIFwibWFcIjogXCIuL2Fzc2V0cy9mb250cy9tYXRlcmlhbC1kZXNpZ24taWNvbnMuY3NzXCJcbiAgICAgICAgfSksXG4gICAgICBTaGFyZWRNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBIb21lQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XG4iXX0=