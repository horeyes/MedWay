import { Component, OnInit } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "tour-details",
    templateUrl: "./tour-details.component.html",
    styleUrls: ["./tour-details.component.scss"]
})

export class TourDetailsComponent implements OnInit {

    mockLocationsPoints: Array<number> = [];
    pointOfInterestIndex: number = 0;
    constructor() {
        this.mockLocationsPoints = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }

    // tslint:disable-next-line:no-empty
    ngOnInit() {}

    get locationPoints() {
        return this.mockLocationsPoints;
    }

    selectPOI(i: number) {
        console.log("index: " + i);
        this.pointOfInterestIndex = i;
    }
}
