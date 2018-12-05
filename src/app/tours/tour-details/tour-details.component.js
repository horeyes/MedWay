"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TourDetailsComponent = /** @class */ (function () {
    function TourDetailsComponent() {
        this.mockLocationsPoints = [];
        this.pointOfInterestIndex = 0;
        this.mockLocationsPoints = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    // tslint:disable-next-line:no-empty
    TourDetailsComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(TourDetailsComponent.prototype, "locationPoints", {
        get: function () {
            return this.mockLocationsPoints;
        },
        enumerable: true,
        configurable: true
    });
    TourDetailsComponent.prototype.selectPOI = function (i) {
        console.log("index: " + i);
        this.pointOfInterestIndex = i;
    };
    TourDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "tour-details",
            templateUrl: "./tour-details.component.html",
            styleUrls: ["./tour-details.component.scss"]
        }),
        __metadata("design:paramtypes", [])
    ], TourDetailsComponent);
    return TourDetailsComponent;
}());
exports.TourDetailsComponent = TourDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvdXItZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFTbEQ7SUFJSTtRQUZBLHdCQUFtQixHQUFrQixFQUFFLENBQUM7UUFDeEMseUJBQW9CLEdBQVcsQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELG9DQUFvQztJQUNwQyx1Q0FBUSxHQUFSLGNBQVksQ0FBQztJQUViLHNCQUFJLGdEQUFjO2FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFFRCx3Q0FBUyxHQUFULFVBQVUsQ0FBUztRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQWxCUSxvQkFBb0I7UUFQaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQy9DLENBQUM7O09BRVcsb0JBQW9CLENBbUJoQztJQUFELDJCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwidG91ci1kZXRhaWxzXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3RvdXItZGV0YWlscy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3RvdXItZGV0YWlscy5jb21wb25lbnQuc2Nzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvdXJEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBtb2NrTG9jYXRpb25zUG9pbnRzOiBBcnJheTxudW1iZXI+ID0gW107XHJcbiAgICBwb2ludE9mSW50ZXJlc3RJbmRleDogbnVtYmVyID0gMDtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubW9ja0xvY2F0aW9uc1BvaW50cyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHlcclxuICAgIG5nT25Jbml0KCkge31cclxuXHJcbiAgICBnZXQgbG9jYXRpb25Qb2ludHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9ja0xvY2F0aW9uc1BvaW50cztcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RQT0koaTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmRleDogXCIgKyBpKTtcclxuICAgICAgICB0aGlzLnBvaW50T2ZJbnRlcmVzdEluZGV4ID0gaTtcclxuICAgIH1cclxufVxyXG4iXX0=