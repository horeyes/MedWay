import { Component, Input } from "@angular/core";

@Component({
    selector: "RadioButton",
    moduleId: module.id,
    templateUrl: "./radio-button.component.html",
    styleUrls: ["./radio-button.component.css"]
})

export class RadioButtonComponent {

    @Input() public checked: boolean = false;
    @Input() public color: string = "green";
    @Input() public borderColor: string = "green";
    constructor() {
        console.log("Triggered");
    }


}