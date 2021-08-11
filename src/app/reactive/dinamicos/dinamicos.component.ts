import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  arregloFavoritos: string[]=[]; 
  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Metal Gear', Validators.required], 
      ['God of War', Validators.required]
    ], Validators.required) 
  }); 
  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray; 
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  validarCampos(campo: string){
    const val = this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched; 
    return val; 
  }
  agregar(){
    if(this.nuevoFavorito.invalid){
      return; 
    }
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, [Validators.required, Validators.minLength(3)] ));
  }
  eliminar(index: number){
    this.favoritosArr.removeAt(index); 
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched(); 
      return;
    }

    

    console.log(this.miFormulario.value); 
    this.miFormulario.reset(); 
  
  }

}
