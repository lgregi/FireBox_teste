import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Produto } from 'src/app/produtos.services';
import { Favoritos } from 'src/app/favoritos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
/*
export class HomeComponent implements OnInit {
  public email: any
  public produto: any
  public produto2: any
  public nome: any
  public paginas:number=1
  constructor(private produtos: Produto, private favoritos: Favoritos) {

  }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user: any) => {
      this.email = user.email
      this.atualizarProdutos()
    })

  }
  //traz todo os produtos, tenta verificar se está trazendo corretamente por página.
  public atualizarProdutos(): void {
    this.produtos.consultarProdutos(this.email,this.paginas)
      .then((produtos) => {
        this.produto = produtos
        console.log(this.produto)

      })
    this.produtos.acessarDadosUsuarioDetalhe(this.email)

    this.produtos.acessarDadosProduto(this.email)
      .then((nome) => {
        this.nome = nome
        console.log(this.nome)

      })
  }
  //recupera os dados para mandar para o favorito
  recuperarproduto(produtos: any) {
    console.log(produtos)
    this.favoritos.Favoritar(this.email, produtos)
  }
  //traz os produtos por pagina, mas ainda vou melhorar
  public pagina (){
    //this.paginas ++
    this.produtos.consultarProdutos(this.email,2)
      .then((produtos) => {
        this.produto = produtos
        console.log(this.produto)

      })

  }

}*/

