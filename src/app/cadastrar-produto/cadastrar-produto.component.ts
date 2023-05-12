import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Produto } from '../produtos.services';
import * as firebase from 'firebase';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css'],
})


export class CadastrarProdutoComponent {
  maxFiles = 4;
  fileCount = 0;
  files: any[] = [];

  onFileChange(event: any) {
    this.fileCount = event.target.files.length;
    if (this.fileCount > this.maxFiles) {
      alert(`Por favor, selecione no máximo ${this.maxFiles} arquivos.`);
      event.target.value = '';
    } else {
      this.files = [];
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        if (i >= this.maxFiles) {
          break;
        }
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.files.push({ name: file.name, url: e.target.result });
        };
        reader.readAsDataURL(file);
      }
    }
  }

  exibirImagens(event: any) {
    this.files = [];
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      if (i >= this.maxFiles) {
        break;
      }
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.files.push({ name: file.name, url: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  }
}




/*
export class CadastrarProdutoComponent implements OnInit {

  public email: any
  public imagem: any
  public imagem2: any
  public imagem3: any
  public imagem4: any

  public formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null),
    'categoria': new FormControl(null),
    'valor': new FormControl(null) 
  })

  constructor(private produto: Produto ) {

  }

  // fução que recupera o e-mail do usuário autenticado
  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user: any) => {
      this.email = user.email
      console.log(user)
    })
     

  }

  // função que manda os dados para o serviço de publicação
  public publicar() {

    this.produto.publicar({
      email: this.email,
        titulo: this.formulario.value.titulo,
        categoria: this.formulario.value.categoria,
        valor: this.formulario.value.valor,
        imagem: this.imagem[0],
        imagem2: this.imagem2[0],
        imagem3: this.imagem3[0],
        imagem4: this.imagem4[0],
        nome_usuario:this.produto.acessarDadosUsuarioDetalhe(this.email)
       

    })
    
    
    .then(()=>{
      this.produto.publicar2({
        email: this.email,
        titulo: this.formulario.value.titulo,
        categoria: this.formulario.value.categoria,
        valor: this.formulario.value.valor,
        imagem: this.imagem[0],
        imagem2: this.imagem2[0],
        imagem3: this.imagem3[0],
        imagem4: this.imagem4[0]// para o projeto oficial recomendo colocar uma condição para não receber o indice 0 se estiver vazio
  
      })
      
  
    })    
    .then(()=>{
      this.produto.publicar3({
        email: this.email,
        titulo: this.formulario.value.titulo,
        categoria: this.formulario.value.categoria,
        valor: this.formulario.value.valor,
        imagem: this.imagem[0],
        imagem2: this.imagem2[0],
        imagem3: this.imagem3[0],
        imagem4: this.imagem4[0]// para o projeto oficial recomendo colocar uma condição para não receber o indice 0 se estiver vazio
  
      })
      
  
    })
    
    .then(()=>{
      this.produto.publicar4({
        email: this.email,
        titulo: this.formulario.value.titulo,
        categoria: this.formulario.value.categoria,
        valor: this.formulario.value.valor,
        imagem: this.imagem[0],
        imagem2: this.imagem2[0],
        imagem3: this.imagem3[0],
        imagem4: this.imagem4[0]  // para o projeto oficial recomendo colocar uma condição para não receber o indice 0 se estiver vazio
  
      })
      
  
    }) 
    
   
    
  }

  public preparaImagemUpload(event: Event) {
    this.imagem = ((<HTMLInputElement>event.target).files) // retorna um array
  }
  public preparaImagemUpload2(event: Event) {
    this.imagem2 = ((<HTMLInputElement>event.target).files) // retorna um array
  }
  public preparaImagemUpload3(event: Event) {
    this.imagem3 = ((<HTMLInputElement>event.target).files) // retorna um array
  }
  public preparaImagemUpload4(event: Event) {
    this.imagem4 = ((<HTMLInputElement>event.target).files) // retorna um array
  }
  

}*/

