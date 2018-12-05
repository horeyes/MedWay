import { Component, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { ModalDatetimepicker } from "nativescript-modal-datetimepicker";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Page } from "tns-core-modules/ui/page/page";
import { ModalComponent } from "./modal";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    time: Date = new Date(new Date().getFullYear(), new Date().getMonth(),
        new Date().getDate(), new Date().getHours(), 0);
    travelersCount: number = 1;
    picker: ModalDatetimepicker = new ModalDatetimepicker();
    @ViewChild(ModalComponent) modal: ModalComponent;
    private _travelersCount: number = 1;
    private _mockArray: Array<any> = [];
    private _selectedCruiseLineIndex: number = 0;
    constructor(private _page: Page, private _routerExtensions: RouterExtensions) {
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

    travelersOnTour() {
        console.log("Traverlers Method");
        this.modal.show();
    }

    closeModal() {
        this.modal.hide();
        this._travelersCount = this.travelersCount;
    }

    onOpenModal() {
        console.log("opened modal");
    }

    onCloseModal() {
        console.log("closed modal");
    }

    decrement() {
        return this._travelersCount = --this._travelersCount;
    }

    increment() {
        return this._travelersCount = ++this._travelersCount;
    }

    acceptCount() {
        this.travelersCount = this._travelersCount;
        this.modal.hide();
    }

    selectTime() {
        this.picker.pickTime().then((result) => {
            this.time = new Date(new Date().getFullYear(), new Date().getMonth(),
                new Date().getDate(), result.hour, result.minute);
        });
    }

    navigate() {
        this._routerExtensions.navigate(["/tours"]);
    }
}
