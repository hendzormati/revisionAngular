import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/core/models/Entity';
import { EntityService } from '../entity.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entity-details',
  templateUrl: './entity-details.component.html',
  styleUrls: ['./entity-details.component.css']
})
export class EntityDetailsComponent implements OnInit {
  id !:number;
  entity = new Entity();
constructor(private active:ActivatedRoute,private service:EntityService){}
  ngOnInit(): void {
   this.id=this.active.snapshot.params["id"];
  this.service.show(this.id).subscribe((val)=>this.entity=val);
  }
}
