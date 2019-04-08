import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { Station } from "../../models/station";
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {

  stations: Station[];

  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.getStations();
  }

  getStations(){
    this.stationService.getStations()
    .subscribe(res =>{
      this.stationService.station= res as Station[];
      console.log(res);
    });
  }

  refresh(): void {
    window.location.reload();
}

}
