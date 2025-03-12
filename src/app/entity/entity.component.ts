import { Component, OnInit } from '@angular/core';
import { EntityService } from '../entity.service';
import { Entity } from 'src/core/models/Entity';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit{
  constructor(private entityService:EntityService){
  }
  list:Entity[]=[];
  ngOnInit(): void {
    this.entityService.getall().subscribe((data)=> {this.list = data});
  }
  delete(entity:Entity)
   {
    this.entityService.delete(entity.id).subscribe(() => this.ngOnInit());
   }
   

}
