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
  nuevoJuego:string=''; 
  persona:Persona = {
    nombre:'',
    favoritos:[
      {id:1, nombre:'Metal Gear'},
      {id:2, nombre:'God of war'}
    ]
  }

  guardar(){
    console.log(this.miFormulario.controls)
  }

  nombreValido(): boolean{
    const val = this.miFormulario?.controls.nombre?.invalid
                && this.miFormulario.controls.nombre.touched; 
    return val; 
  }
  borrar(i:number){
    this.persona.favoritos.splice(i,1); 
  }
  agregar(){
    let lastId:number = this.persona.favoritos[this.persona.favoritos.length-1]?.id; 
    if(lastId){
      lastId = lastId;  
    }else{
      lastId = 0; 
    }
    console.log(lastId); 
    const nuevoFavorito = {
      id:lastId +1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({... nuevoFavorito}); 
    this.nuevoJuego=''; 
  }
}
