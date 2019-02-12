import {Component, OnInit} from '@angular/core';
import {Usuario} from "./model/usuario";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  teste: Usuario = new Usuario();
  list : Array<Usuario> = new Array<Usuario>();
  constructor() {
  }

  ngOnInit() {

    }

  save() {
  this.list.push(this.teste);
  this.teste = new Usuario();
  }

  delete(todo){

  }

}
