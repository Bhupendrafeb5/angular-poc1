import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit,OnChanges {

 //@ViewChild('sKeyInChild', { static: false }) key: ElementRef;
  @Output() addWell=new EventEmitter<{name:string,type:string,sourceKey:string}>();
  @Input() sourceKey:string
  
  constructor() { }

  ngOnInit(): void {
    console.log("sourceKey in child component: ",this.sourceKey)

  }

  ngOnChanges(){
    console.log("sourceKey in child component: ",this.sourceKey)
    
  }
 

  submit(ngform:NgForm){
    console.log(ngform.value)
  let well= {name:ngform.value.name,
             type:ngform.value.type,
             sourceKey:this.sourceKey}
    this.addWell.emit(well)


  }
}
