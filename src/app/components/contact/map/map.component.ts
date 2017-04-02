import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
    lat: number = 44.4249076;
    lng: number = 26.163399;
    zoom: number = 16;
}
