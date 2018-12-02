import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    private _mockArray: Array<any> = [];
    private _selectedCruiseLineIndex: number = 0;
    constructor(private _page: Page) {
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

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    get dataItems() {
        return this._mockArray;
    }

    selectCruiseLine(i: number) {
        console.log("Tapped");
        this._mockArray[this._selectedCruiseLineIndex].checked = false;
        this._selectedCruiseLineIndex = i;
        this._mockArray[this._selectedCruiseLineIndex].checked = true;
    }
}
