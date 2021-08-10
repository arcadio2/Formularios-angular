import { Component,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id:number;
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {
  @ViewChild('miFormulario') miFormulario!:NgForm;


  guardar(){
    console.log(this.miFormulario.controls)
  }

  nombreValido(): boolean{
    const val = this.miFormulario?.controls.nombre?.invalid
                && this.miFormulario.controls.nombre.touched; 
    return val; 
  }

}
