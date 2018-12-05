import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    moduleId: module.id,
    selector: "tour-main-view",
    templateUrl: "./tours.component.html",
    styleUrls: ["./tours.component.scss"]
})

export class TourComponent implements OnInit {
    constructor(private _page: Page) {
        this._page.actionBarHidden = true;
    }

    ngOnInit() { }
}