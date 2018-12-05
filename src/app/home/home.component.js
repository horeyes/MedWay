"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_modal_datetimepicker_1 = require("nativescript-modal-datetimepicker");
var app = require("tns-core-modules/application");
var page_1 = require("tns-core-modules/ui/page/page");
var modal_1 = require("./modal");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_page, _routerExtensions) {
        this._page = _page;
        this._routerExtensions = _routerExtensions;
        this.time = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(), 0);
        this.travelersCount = 1;
        this.picker = new nativescript_modal_datetimepicker_1.ModalDatetimepicker();
        this._travelersCount = 1;
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
    HomeComponent.prototype.travelersOnTour = function () {
        console.log("Traverlers Method");
        this.modal.show();
    };
    HomeComponent.prototype.closeModal = function () {
        this.modal.hide();
        this._travelersCount = this.travelersCount;
    };
    HomeComponent.prototype.onOpenModal = function () {
        console.log("opened modal");
    };
    HomeComponent.prototype.onCloseModal = function () {
        console.log("closed modal");
    };
    HomeComponent.prototype.decrement = function () {
        return this._travelersCount = --this._travelersCount;
    };
    HomeComponent.prototype.increment = function () {
        return this._travelersCount = ++this._travelersCount;
    };
    HomeComponent.prototype.acceptCount = function () {
        this.travelersCount = this._travelersCount;
        this.modal.hide();
    };
    HomeComponent.prototype.selectTime = function () {
        var _this = this;
        this.picker.pickTime().then(function (result) {
            _this.time = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), result.hour, result.minute);
        });
    };
    HomeComponent.prototype.navigate = function () {
        this._routerExtensions.navigate(["/tours"]);
    };
    __decorate([
        core_1.ViewChild(modal_1.ModalComponent),
        __metadata("design:type", modal_1.ModalComponent)
    ], HomeComponent.prototype, "modal", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.scss"]
        }),
        __metadata("design:paramtypes", [page_1.Page, nativescript_angular_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBd0Q7QUFDeEQsdUZBQXdFO0FBRXhFLGtEQUFvRDtBQUNwRCxzREFBcUQ7QUFDckQsaUNBQXlDO0FBUXpDO0lBVUksdUJBQW9CLEtBQVcsRUFBVSxpQkFBbUM7UUFBeEQsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFSNUUsU0FBSSxHQUFTLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDakUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BELG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLFdBQU0sR0FBd0IsSUFBSSx1REFBbUIsRUFBRSxDQUFDO1FBRWhELG9CQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLGVBQVUsR0FBZSxFQUFFLENBQUM7UUFDNUIsNkJBQXdCLEdBQVcsQ0FBQyxDQUFDO1FBRXpDLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFbEMsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNkO2dCQUNJLEdBQUcsRUFBRSx3QkFBd0I7Z0JBQzdCLE9BQU8sRUFBRSxJQUFJO2FBQ2hCO1lBQ0Q7Z0JBQ0ksR0FBRyxFQUFFLHlCQUF5QjtnQkFDOUIsT0FBTyxFQUFFLEtBQUs7YUFDakI7WUFDRDtnQkFDSSxHQUFHLEVBQUUsMEJBQTBCO2dCQUMvQixPQUFPLEVBQUUsS0FBSzthQUNqQjtZQUNEO2dCQUNJLEdBQUcsRUFBRSwwQkFBMEI7Z0JB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UyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0FXNkIsV0FBSSxFQUE2Qix1Q0FBZ0I7T0FWbkUsYUFBYSxDQTJHekI7SUFBRCxvQkFBQztDQUFBLEFBM0dELElBMkdDO0FBM0dZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBNb2RhbERhdGV0aW1lcGlja2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1tb2RhbC1kYXRldGltZXBpY2tlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL21vZGFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgdGltZTogRGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgbmV3IERhdGUoKS5nZXRNb250aCgpLFxuICAgICAgICBuZXcgRGF0ZSgpLmdldERhdGUoKSwgbmV3IERhdGUoKS5nZXRIb3VycygpLCAwKTtcbiAgICB0cmF2ZWxlcnNDb3VudDogbnVtYmVyID0gMTtcbiAgICBwaWNrZXI6IE1vZGFsRGF0ZXRpbWVwaWNrZXIgPSBuZXcgTW9kYWxEYXRldGltZXBpY2tlcigpO1xuICAgIEBWaWV3Q2hpbGQoTW9kYWxDb21wb25lbnQpIG1vZGFsOiBNb2RhbENvbXBvbmVudDtcbiAgICBwcml2YXRlIF90cmF2ZWxlcnNDb3VudDogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIF9tb2NrQXJyYXk6IEFycmF5PGFueT4gPSBbXTtcbiAgICBwcml2YXRlIF9zZWxlY3RlZENydWlzZUxpbmVJbmRleDogbnVtYmVyID0gMDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlLCBwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl9tb2NrQXJyYXkgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1nOiBcIn4vYXNzZXRzL2ltYWdlcy9SQy5wbmdcIixcbiAgICAgICAgICAgICAgICBjaGVja2VkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzogXCJ+L2Fzc2V0cy9pbWFnZXMvRENMLnBuZ1wiLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzogXCJ+L2Fzc2V0cy9pbWFnZXMvbndjbC5wbmdcIixcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWc6IFwifi9hc3NldHMvaW1hZ2VzL253Y2wucG5nXCIsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1nOiBcIn4vYXNzZXRzL2ltYWdlcy9ud2NsLnBuZ1wiLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzogXCJ+L2Fzc2V0cy9pbWFnZXMvbndjbC5wbmdcIixcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWc6IFwifi9hc3NldHMvaW1hZ2VzL253Y2wucG5nXCIsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGFJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vY2tBcnJheTtcbiAgICB9XG5cbiAgICBzZWxlY3RDcnVpc2VMaW5lKGk6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRhcHBlZFwiKTtcbiAgICAgICAgdGhpcy5fbW9ja0FycmF5W3RoaXMuX3NlbGVjdGVkQ3J1aXNlTGluZUluZGV4XS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkQ3J1aXNlTGluZUluZGV4ID0gaTtcbiAgICAgICAgdGhpcy5fbW9ja0FycmF5W3RoaXMuX3NlbGVjdGVkQ3J1aXNlTGluZUluZGV4XS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0cmF2ZWxlcnNPblRvdXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHJhdmVybGVycyBNZXRob2RcIik7XG4gICAgICAgIHRoaXMubW9kYWwuc2hvdygpO1xuICAgIH1cblxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuaGlkZSgpO1xuICAgICAgICB0aGlzLl90cmF2ZWxlcnNDb3VudCA9IHRoaXMudHJhdmVsZXJzQ291bnQ7XG4gICAgfVxuXG4gICAgb25PcGVuTW9kYWwoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib3BlbmVkIG1vZGFsXCIpO1xuICAgIH1cblxuICAgIG9uQ2xvc2VNb2RhbCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbG9zZWQgbW9kYWxcIik7XG4gICAgfVxuXG4gICAgZGVjcmVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJhdmVsZXJzQ291bnQgPSAtLXRoaXMuX3RyYXZlbGVyc0NvdW50O1xuICAgIH1cblxuICAgIGluY3JlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYXZlbGVyc0NvdW50ID0gKyt0aGlzLl90cmF2ZWxlcnNDb3VudDtcbiAgICB9XG5cbiAgICBhY2NlcHRDb3VudCgpIHtcbiAgICAgICAgdGhpcy50cmF2ZWxlcnNDb3VudCA9IHRoaXMuX3RyYXZlbGVyc0NvdW50O1xuICAgICAgICB0aGlzLm1vZGFsLmhpZGUoKTtcbiAgICB9XG5cbiAgICBzZWxlY3RUaW1lKCkge1xuICAgICAgICB0aGlzLnBpY2tlci5waWNrVGltZSgpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aW1lID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCBuZXcgRGF0ZSgpLmdldE1vbnRoKCksXG4gICAgICAgICAgICAgICAgbmV3IERhdGUoKS5nZXREYXRlKCksIHJlc3VsdC5ob3VyLCByZXN1bHQubWludXRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGUoKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3RvdXJzXCJdKTtcbiAgICB9XG59XG4iXX0=