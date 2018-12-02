"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RadioButtonComponent = /** @class */ (function () {
    function RadioButtonComponent() {
        this.checked = false;
        this.color = "green";
        this.borderColor = "green";
        console.log("Triggered");
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RadioButtonComponent.prototype, "checked", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadioButtonComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadioButtonComponent.prototype, "borderColor", void 0);
    RadioButtonComponent = __decorate([
        core_1.Component({
            selector: "RadioButton",
            moduleId: module.id,
            templateUrl: "./radio-button.component.html",
            styleUrls: ["./radio-button.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], RadioButtonComponent);
    return RadioButtonComponent;
}());
exports.RadioButtonComponent = RadioButtonComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJhZGlvLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFTakQ7SUFLSTtRQUhnQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFVBQUssR0FBVyxPQUFPLENBQUM7UUFDeEIsZ0JBQVcsR0FBVyxPQUFPLENBQUM7UUFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBTFE7UUFBUixZQUFLLEVBQUU7O3lEQUFpQztJQUNoQztRQUFSLFlBQUssRUFBRTs7dURBQWdDO0lBQy9CO1FBQVIsWUFBSyxFQUFFOzs2REFBc0M7SUFKckMsb0JBQW9CO1FBUGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM5QyxDQUFDOztPQUVXLG9CQUFvQixDQVVoQztJQUFELDJCQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlJhZGlvQnV0dG9uXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yYWRpby1idXR0b24uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9yYWRpby1idXR0b24uY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJhZGlvQnV0dG9uQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcHVibGljIGNvbG9yOiBzdHJpbmcgPSBcImdyZWVuXCI7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgYm9yZGVyQ29sb3I6IHN0cmluZyA9IFwiZ3JlZW5cIjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHJpZ2dlcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=