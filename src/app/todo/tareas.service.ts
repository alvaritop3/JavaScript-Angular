import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
//Atributo de la clase (Array tipo string)
private _tareas: string[] = [];

//Getter y setter
public get tareas(): string[]{
  return this._tareas;
}
public set tareas(value: string[]){
  this._tareas = value;
}

  constructor() { }
}
