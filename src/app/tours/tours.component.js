"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var TourComponent = /** @class */ (function () {
    function TourComponent(_page) {
        this._page = _page;
        this._page.actionBarHidden = true;
    }
    TourComponent.prototype.ngOnInit = function () { };
    TourComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "tour-main-view",
            templateUrl: "./tours.component.html",
            styleUrls: ["./tours.component.scss"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], TourComponent);
    return TourComponent;
}());
exports.TourComponent = TourComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91cnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG91cnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUFxRDtBQVNyRDtJQUNJLHVCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUVELGdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBTEwsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDO3lDQUc2QixXQUFJO09BRHRCLGFBQWEsQ0FNekI7SUFBRCxvQkFBQztDQUFBLEFBTkQsSUFNQztBQU5ZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJ0b3VyLW1haW4tdmlld1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90b3Vycy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3RvdXJzLmNvbXBvbmVudC5zY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVG91ckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyB9XHJcbn0iXX0=