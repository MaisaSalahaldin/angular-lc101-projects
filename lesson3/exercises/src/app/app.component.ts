import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  


  afterTakeOff: boolean = false;
   takeOff: boolean = false;
   outOfBounds: boolean[] = [false, false, false, false];
  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOff = true;
       this.afterTakeOff = true;
       let movement = parseInt(rocketImage.style.bottom) + 50 + 'px';
         rocketImage.style.bottom = movement;
    }
 }
 handleLand(){
  window.alert("The shuttle is landing. Landing gear engaged.");
  this.message= "The shuttle has landed.";
  this.color='green'
  this.height=0;
 }

 handleAbort(){
 let result= window.confirm("Do you want to abort the mission?");
 if(result){

 
  this.message= "Mission aborted.";
  this.color='red'
  this.height=0;
 }
 }
 moveRocket(rocketImage, direction:string){
  if (direction === 'right') {
    let movement = parseInt(rocketImage.style.left) + 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width + 10000;
 }
 if (direction === 'left') {
  let movement = parseInt(rocketImage.style.left) - 10 + 'px';
  rocketImage.style.left = movement;
  this.width = this.width + 10000;
}
if (direction === 'up') {
  let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
  rocketImage.style.bottom = movement;
  //this.width = this.width + 10000;
  this.height=this.height+10000;
}
if (direction === 'down') {
  let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
  rocketImage.style.bottom = movement;
  this.width = this.width + 10000;
  this.height=this.height-10000;
}
 }
}
