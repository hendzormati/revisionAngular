import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityService } from '../entity.service';

@Component({
  selector: 'app-entity-update-form',
  templateUrl: './entity-update-form.component.html',
  styleUrls: ['./entity-update-form.component.css']
})
export class EntityUpdateFormComponent {
formR!:FormGroup;
  constructor(private service:EntityService, private router:Router,private active:ActivatedRoute){}
  id!:number;
  ngOnInit(): void {
   this.id=this.active.snapshot.params["id"];
   this.formR= new FormGroup({
     id:new FormControl('',[Validators.required,Validators.minLength(2)]),
     name:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z]/)]),
     status:new FormControl('',[Validators.required,Validators.pattern(/^disponnible$/)]),
   });
   this.service.show(this.id).subscribe((val)=>{
    this.formR.patchValue(val)
  });
 }
 get status(){ return this.formR.get('status');}
 update()
 {
   this.service.update(this.formR.value,this.id).subscribe(()=>
   this.router.navigate(["/entity"])
   );
 }
}
