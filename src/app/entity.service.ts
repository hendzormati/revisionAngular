import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from 'src/core/models/Entity';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
url="http://localhost:3000/Entity";
constructor( private http:HttpClient) { }
getall():Observable<Entity[]>
{
  return this.http.get<Entity[]>(this.url);
}
add(entity : Entity)
{
  return this.http.post<Entity>(this.url,entity);
}
delete(id:any)
{
  return this.http.delete<Entity>(this.url+"/"+id);
}
update(entity:Entity,id:any)
{
  return this.http.put<Entity>(this.url+"/"+id,entity);
}
show(id:any)
{
  return this.http.get<Entity>(this.url+"/"+id);
}
}
