import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  n!: string
  a!: string
  e!: string
  data: any[] = []
  mensaje!: string

  capturar(nom: string, ape: string, edad: string) {
    this.n = nom
    this.a = ape
    this.e = edad
    /* Para generar un objeto */
    class agregarPersona {
      nombre: string
      apellido: string
      edad: string

      constructor(nom: string, ape: string, age: string) {
        this.nombre = nom
        this.apellido = ape
        this.edad = age
      }

    }
    /** */
    var persona = new agregarPersona(this.n, this.a, this.e)
    this.data.push(persona)
    // if (this.e >= "18") {
    //   this.mensaje = this.n + " " + this.a + " " + "Es mayor"
    // }else{
    //   this.mensaje = this.n + " " + this.a + " " + "Es menor"
    // }
    console.log(persona)
  }

}
