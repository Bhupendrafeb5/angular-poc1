import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
export class WellsInfo {
  name: string;
  type: string;
  sourceKey: number;

  constructor(name: string, type: string, sourceKey: number) {
    this.name = name
    this.sourceKey = sourceKey
    this.type = type
  }
}

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent implements OnInit {
  
  @ViewChild('sourceKey', { static: false }) divHello: ElementRef;
  key:string;
  showChild:boolean=false

  constructor() { }
wellsInfo:WellsInfo[]=[
  new WellsInfo("TestRLSWell01","rls",100081),
  new WellsInfo("TestESPWell01","esp",100001),
  new WellsInfo("TestRLSWell01","rls",100011),
  new WellsInfo("TestRLSWell01","rls",100011),
  new WellsInfo("TestESPWell01","esp",100001),
  new WellsInfo("TestRLSWell01","rls",100001),
]
  ngOnInit(): void {

    
  }
  passKey(key){
 console.log(key)
 this.key=key
this.showChild=true
   }

   catchEvent(well:any){
console.log('in parent: ',well)
let wells=new WellsInfo(well.name,well.type,well.sourceKey);
this.wellsInfo.push(wells);
   }

}
