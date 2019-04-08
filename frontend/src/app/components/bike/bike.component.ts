import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Bike } from "../../models/bike";
import { Station } from "../../models/station";
import { Modify } from "../../models/modify";
import { BikeService } from 'src/app/services/bike.service';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {

  unassignedbikes: Bike[];
  station: Station;
  selectedbike: Bike;

  constructor(private bikeService: BikeService, private activatedRoute: ActivatedRoute, private stationService: StationService) { 
    this.station = new Station();
    this.unassignedbikes = new Array();
    this.selectedbike = new Bike();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (typeof params['id'] !== 'undefined') {
        this.station._id = params['id'];
      } else {
        this.station._id = '';
      }
    });
    this.getSingleStation(this.station._id)
    //this.getBikes();
    this.getUnassignedBikes();
  }
  getBikes(){
    this.bikeService.getBikes()
    .subscribe(res =>{
      this.bikeService.bike= res as Bike[];
      console.log(res);
    });
  }

  getUnassignedBikes(){
    this.bikeService.getUnassignedBikes()
    .subscribe(res =>{
      this.unassignedbikes= res as Bike[];
      console.log(res);
    });
  }

  getSingleStation(id: string) {
    this.stationService.getSingleStation(id)
      .subscribe(res =>{
        this.station = res as Station;
      });
    console.log(this.station);
  }

  deleteBikeStation(id1: string, id2: string) {
    let modify = new Modify(id1, id2);
    this.bikeService.deleteBikeStation(modify)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.handleError(err);
        });
        window.location.reload();
  }

  postBikeStation(id1: string, id2: string) {
    let modify = new Modify(id1, id2);
    this.bikeService.postBikeStation(modify)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.handleError(err);
        });
        window.location.reload();
  }

  deleteBike(_id: string){
    if(confirm('Are you sure you want to delete it?')) {
      this.bikeService.deleteBike(_id)
        .subscribe(res => {
          this.getBikes();
          //M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  private handleError(err: HttpErrorResponse) {
    if( err.status == 500 ) {
      alert(err);
    } else if ( err.status == 404 ) {
      alert('The student does not exist');
    }
  }

  refresh(): void {
    window.location.reload();
}

}
