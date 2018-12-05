import { Component, OnInit } from "@angular/core";

import { RouterExtensions } from "nativescript-angular";
import { MapView, Marker, Position } from "nativescript-google-maps-sdk";

@Component({
    moduleId: module.id,
    selector: "tour-map-view",
    templateUrl: "./tour-map-view.component.html",
    styleUrls: ["./tour-map-view.component.scss"]
})

export class TourMapViewComponent implements OnInit {
    latitude = 18.465539;
    longitude = -66.105735;
    zoom = 15;
    minZoom = 0;
    maxZoom = 22;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapView: MapView;

    lastCamera: string;

    // tslint:disable-next-line:no-empty
    constructor(private _routerExtensions: RouterExtensions) { }

    // tslint:disable-next-line:no-empty
    ngOnInit() { }

    // Map events
    onMapReady(event) {
        console.log("Map Ready");

        this.mapView = event.object;

        console.log("Setting a marker...");

        const marker = new Marker();
        marker.position = Position.positionFromLatLng(this.latitude, this.longitude);
        marker.title = "San Lorenzo";
        marker.snippet = "Puerto Rico";
        marker.userData = { index: 1 };
        this.mapView.addMarker(marker);
    }

    onCoordinateTapped(args) {
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    }

    onMarkerEvent(args) {
        console.log("Marker Event: '" + args.eventName
            + "' triggered on: " + args.marker.title
            + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    }

    onCameraChanged(args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    }

    onCameraMove(args) {
        console.log("Camera moving: " + JSON.stringify(args.camera));
    }

    finishTour() {
        console.log("Tapped");
        this._routerExtensions.navigate(["/home"]);
    }
}
