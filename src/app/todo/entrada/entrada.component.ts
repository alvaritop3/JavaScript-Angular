import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  //Atributo llamado _tarea
  private _tarea: string = "";
  //Constructor de la clase
  constructor(private servicioTareas: TareasService) { }
  //Métodos y funciones de la clase
  set tarea(tarea: string){
    this._tarea = tarea;
  }

  get tarea(): string{
    return this._tarea;
  }
  addTarea(): void{
    if (this._tarea !==""){
      //Pusheamos al array tareas la tarea
      this.servicioTareas.tareas.push(this._tarea);
      //Volvemos a inicializar el atributo _tarea a vacío
      this._tarea="";
    }
  }

  ngOnInit(): void {
  }

}
