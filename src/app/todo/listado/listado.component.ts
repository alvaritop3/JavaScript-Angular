import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  private _tareas: string[] = [];

  constructor(private servicioTareas: TareasService) {}

  public get tareas(): string[] {
    return this._tareas;
  }

  public set tareas(value: string[]) {
    this._tareas = value;
  }

  //Se hará al actualizar la página
  ngOnInit(): void {
    this._tareas = this.servicioTareas.tareas;
  }

  //Esta función, se queda solo con las tareas que no coinciden con la tarea que acabamos de pulsar
  completada(tareaCompletada: string): void {
    this._tareas = this._tareas.filter((tarea) => tarea !== tareaCompletada);
    //Si no lo ponemos, despues de eliminar, no nos muestra las que añadimos
    this.servicioTareas.tareas = this._tareas;
  }
}
