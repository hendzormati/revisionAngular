import { Component, OnInit } from '@angular/core';
import { EntityService } from '../entity.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.css']
})
export class EntityFormComponent implements OnInit{

  formR!:FormGroup;
  constructor(private service:EntityService, private router:Router){}
  ngOnInit(): void {
   this.formR= new FormGroup({
     id:new FormControl('',[Validators.required,Validators.minLength(2)]),
     name:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z]/)]),
     status:new FormControl('',[Validators.required,Validators.pattern(/^disponnible$/)]),
   });
 }
 get status(){ return this.formR.get('status');}
 add()
 {
   this.service.add(this.formR.value).subscribe(()=>
   this.router.navigate(["/entity"])
   );
 }
}
