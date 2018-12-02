"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var page_1 = require("tns-core-modules/ui/page/page");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_page) {
        this._page = _page;
        this._mockArray = [];
        this._selectedCruiseLineIndex = 0;
        // Use the component constructor to inject providers.
        this._page.actionBarHidden = true;
        this._mockArray = [
            {
                img: "~/assets/images/RC.png",
                checked: true
            },
            {
                img: "~/assets/images/DCL.png",
                checked: false
            },
            {
                img: "~/assets/images/nwcl.png",
                checked: false
            },
            {
                img: "~/assets/images/nwcl.png",
                checked: false
            },
            {
                img: "~/assets/images/nwcl.png",
                checked: false
            },
            {
                img: "~/assets/images/nwcl.png",
                checked: false
            },
            {
                img: "~/assets/images/nwcl.png",
                checked: false
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    Object.defineProperty(HomeComponent.prototype, "dataItems", {
        get: function () {
            return this._mockArray;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.selectCruiseLine = function (i) {
        console.log("Tapped");
        this._mockArray[this._selectedCruiseLineIndex].checked = false;
        this._selectedCruiseLineIndex = i;
        this._mockArray[this._selectedCruiseLineIndex].checked = true;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.scss"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxrREFBb0Q7QUFDcEQsc0RBQXFEO0FBUXJEO0lBSUksdUJBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBRnZCLGVBQVUsR0FBZSxFQUFFLENBQUM7UUFDNUIsNkJBQXdCLEdBQVcsQ0FBQyxDQUFDO1FBRXpDLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFbEMsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNkO2dCQUNJLEdBQUcsRUFBRSx3QkFBd0I7Z0JBQzdCLE9BQU8sRUFBRSxJQUFJO2FBQ2hCO1lBQ0Q7Z0JBQ0ksR0FBRyxFQUFFLHlCQUF5QjtnQkFDOUIsT0FBTyxFQUFFLEtBQUs7YUFDakI7WUFDRDtnQkFDSSxHQUFHLEVBQUUsMEJBQTBCO2dCQUMvQixPQUFPLEVBQUUsS0FBSzthQUNqQjtZQUNEO2dCQUNJLEdBQUcsRUFBRSwwQkFBMEI7Z0JBQy9CLE9BQU8sRUFBRSxLQUFLO2FBQ2pCO1lBQ0Q7Z0JBQ0ksR0FBRyxFQUFFLDBCQUEwQjtnQkFDL0IsT0FBTyxFQUFFLEtBQUs7YUFDakI7WUFDRDtnQkFDSSxHQUFHLEVBQUUsMEJBQTBCO2dCQUMvQixPQUFPLEVBQUUsS0FBSzthQUNqQjtZQUNEO2dCQUNJLEdBQUcsRUFBRSwwQkFBMEI7Z0JBQy9CLE9BQU8sRUFBRSxLQUFLO2FBQ2pCO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsc0JBQUksb0NBQVM7YUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHdDQUFnQixHQUFoQixVQUFpQixDQUFTO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQy9ELElBQUksQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2xFLENBQUM7SUExRFEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0FLNkIsV0FBSTtPQUp0QixhQUFhLENBMkR6QjtJQUFELG9CQUFDO0NBQUEsQUEzREQsSUEyREM7QUEzRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIF9tb2NrQXJyYXk6IEFycmF5PGFueT4gPSBbXTtcbiAgICBwcml2YXRlIF9zZWxlY3RlZENydWlzZUxpbmVJbmRleDogbnVtYmVyID0gMDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl9tb2NrQXJyYXkgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1nOiBcIn4vYXNzZXRzL2ltYWdlcy9SQy5wbmdcIixcbiAgICAgICAgICAgICAgICBjaGVja2VkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzogXCJ+L2Fzc2V0cy9pbWFnZXMvRENMLnBuZ1wiLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzogXCJ+L2Fzc2V0cy9pbWFnZXMvbndjbC5wbmdcIixcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWc6IFwifi9hc3NldHMvaW1hZ2VzL253Y2wucG5nXCIsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1nOiBcIn4vYXNzZXRzL2ltYWdlcy9ud2NsLnBuZ1wiLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzogXCJ+L2Fzc2V0cy9pbWFnZXMvbndjbC5wbmdcIixcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWc6IFwifi9hc3NldHMvaW1hZ2VzL253Y2wucG5nXCIsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGFJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vY2tBcnJheTtcbiAgICB9XG5cbiAgICBzZWxlY3RDcnVpc2VMaW5lKGk6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRhcHBlZFwiKTtcbiAgICAgICAgdGhpcy5fbW9ja0FycmF5W3RoaXMuX3NlbGVjdGVkQ3J1aXNlTGluZUluZGV4XS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkQ3J1aXNlTGluZUluZGV4ID0gaTtcbiAgICAgICAgdGhpcy5fbW9ja0FycmF5W3RoaXMuX3NlbGVjdGVkQ3J1aXNlTGluZUluZGV4XS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG59XG4iXX0=