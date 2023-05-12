// Serviço criado para cadastro de produtos
import { Injectable } from "@angular/core"
//import { Progresso } from "./progresso.service"
import * as firebase from "firebase"
import { Observable } from 'rxjs';

//import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';





@Injectable()
export class Produto {
  public imagem: Array<any> = []
  public key: any
  public nome: any


  constructor(/*private progresso: Progresso*/) {

  }

  //função para armazenar uma imagem no firebase e criar o nó contendo as informações do produto
  public publicar(publicacao: any): Promise<any> {
    return new Promise((resolve, reject) => {
      //armazena as informações do produto no firebase
      firebase.database().ref(`produtos`)
        .push({
          titulo: publicacao.titulo, categoria: publicacao.categoria,
          valor: publicacao.valor, email: publicacao.email,
          nome_usuario: publicacao.nome_usuario
        })
        .then((resposta: any) => {
          // console.log(resposta)
          let nomeImagem = resposta.key
          this.key = resposta.key
          //armazena a imagem no firabase com id dos detalhes do produto
          firebase.storage().ref()
            .child(`imagens/${nomeImagem}`)
            .put(publicacao.imagem)
            .then((snapshot) => {

              console.log('concluida1')
              snapshot.ref.getDownloadURL().then((url) => {
                // URL da imagem obtida
                this.imagem[0] = url
                console.log('url obtidade1', url,);
                resolve(url);
              });
            })
            .catch((error) => {
              // Tratamento de erro
              console.error(error);
              reject(error);
            });
          //console.log(resposta.key)
          console.log(publicacao)
          console.log("chegamos até o controle de dados")
        })

    });
  }


  //funçao que faz update no nó solicitado e armazena a segunda foto    
  public publicar2(publicacao: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let nomeImagem = Date.now()

      firebase
        .storage().ref().child(`imagens/${nomeImagem}`)
        .put(publicacao.imagem2)
        .then((snapshot) => {
          // Upload concluído com sucesso
          console.log("concluida2");
          snapshot.ref.getDownloadURL().then((url) => {
            // URL da imagem obtida
            this.imagem[1] = url;
            console.log("url obtidade", url);
            firebase.database().ref(`produtos/${this.key}`)
              .update({ url: this.imagem })
              .then((resposta: any) => {
                console.log(this.key);
                console.log(resposta);
                resolve(resposta);
              })
              .catch((error) => {
                console.error(error);
                reject(error);
              });
          });
        })
        .catch((error) => {
          // Tratamento de erro
          console.error(error);
          reject(error);
        });

      //console.log(publicacao)
      console.log("chegamos até o controle de dados2");
    });
  }


  public publicar3(publicacao: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let nomeImagem = Date.now()

      firebase
        .storage().ref().child(`imagens/${nomeImagem}`)
        .put(publicacao.imagem3)
        .then((snapshot) => {
          // Upload concluído com sucesso
          console.log("concluida3");
          snapshot.ref.getDownloadURL().then((url) => {
            // URL da imagem obtida
            this.imagem[2] = url;
            console.log("url obtidade", url);
            firebase.database().ref(`produtos/${this.key}`)
              .update({ url: this.imagem })
              .then((resposta: any) => {
                console.log(this.key);
                console.log(resposta);
                resolve(resposta);
              })
              .catch((error) => {
                console.error(error);
                reject(error);
              });
          });
        })
        .catch((error) => {
          // Tratamento de erro
          console.error(error);
          reject(error);
        });

      //console.log(publicacao)
      console.log("chegamos até o controle de dados3");
    });
  }


  public publicar4(publicacao: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let nomeImagem = Date.now()

      firebase
        .storage().ref().child(`imagens/${nomeImagem}`)
        .put(publicacao.imagem4)
        .then((snapshot) => {
          // Upload concluído com sucesso
          console.log("concluida4");
          snapshot.ref.getDownloadURL().then((url) => {
            // URL da imagem obtida
            this.imagem[3] = url;
            console.log("url obtidade", url);
            firebase.database().ref(`produtos/${this.key}`)
              .update({ url: this.imagem })
              .then((resposta: any) => {
                console.log(this.key);
                console.log(resposta);
                resolve(resposta);
              })
              .catch((error) => {
                console.error(error);
                reject(error);
              });
          });
        })
        .catch((error) => {
          // Tratamento de erro
          console.error(error);
          reject(error);
        });

      //console.log(publicacao)
      console.log("chegamos até o controle de dados4");
    });
  }



  // traz todos os produtos
  public consultarProdutosporpagina(email: string, pagina: number): Promise<any> {
    const produtosPorPagina = 2
    const inicio = (pagina - 1) * produtosPorPagina
    const fim = inicio + produtosPorPagina
  
    return new Promise((resolve, reject) => {
      firebase.database().ref(`produtos`)
        .orderByKey()
        .once('value')
        .then((snapshot) => {
          let produtos: Array<any> = []
          snapshot.forEach((childSnapshot: any) => {
            let publicacao = childSnapshot.val()
            publicacao.key = childSnapshot.key
            produtos.push(publicacao)
          })
          const produtosPaginados = produtos.slice(inicio, fim)
          resolve(produtosPaginados)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  public consultarProdutos(email: string): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase.database().ref(`produtos`)
      .orderByKey()
        .once('value')
        .then((snapshot) => {
          //console.log(snapshot.val())
          let produtos: Array<any> = []
          this.nome = snapshot.val()
          
          snapshot.forEach((childSnapshot: any) => {
            let publicacao = childSnapshot.val()
            publicacao.key=childSnapshot.key
            produtos.push(publicacao)
            resolve(produtos)
            
          })

          return produtos.reverse()
        })       
        
    })    
  }
  



  // filtro por categoria
  public consultarProdutosPorCategoria(email: string, categoria: string): Promise<any> {

    return new Promise((resolve, reject) => {
        firebase.database().ref(`produtos`)
            .orderByChild('categoria')
            .equalTo(categoria)
            .once('value')
            .then((snapshot) => {
                let produtos: Array<any> = []
                snapshot.forEach((childSnapshot: any) => {
                    let publicacao = childSnapshot.val()
                    publicacao.key=childSnapshot.key
                    produtos.push(publicacao)
                    resolve(produtos)
                })
                return produtos.reverse()
            })
             
            .catch((err:Error) => {
              reject(err);
              console.error(err)
            })
    })
}

// barra de pesquisa que traz os produtos por letra
public Pesquisar(titulo: string): Observable<any> {
  return new Observable((observer) => {
    const ref = firebase.database().ref('produtos')
      .orderByChild('titulo')
      .startAt(titulo)
      .endAt(titulo + '\uf8ff')

    const escutar = ref.on('value', (snapshot:any) => {
      const produtos: Array<any> = []
      snapshot.forEach((childSnapshot: any) => {
        const publicacao = childSnapshot.val()
        publicacao.key = childSnapshot.key
        produtos.push(publicacao)
      })
      observer.next(produtos)
    })

    
  })
}


//retorna a lista de produtos cadastrada pelo usuário
public consultarProdutosPorusuario(email: string): Promise<any> {

  return new Promise((resolve, reject) => {
      firebase.database().ref(`produtos`)
          .orderByChild('email')
          .equalTo(email)
          .once('value')
          .then((snapshot) => {
              let produtos: Array<any> = []
              snapshot.forEach((childSnapshot: any) => {
                  let publicacao = childSnapshot.val()
                  publicacao.key=childSnapshot.key
                  produtos.push(publicacao)
                  resolve(produtos)
              })
              return produtos.reverse()
          })
          
          .catch((err:Error) => {
            reject(err);
            console.error(err)
          })
  })
}
  //acessa dados do usuario e retorna o nome para armazenamento
  public acessarDadosUsuarioDetalhe(email: string): string {

    let nome: string = ""
    firebase.database().ref(`usuario_detalhe/${btoa(email)}`)
      .on('value', (snapshot: any) => {
        snapshot.forEach((childSnapshot: any) => {
          const dadosUsuario = childSnapshot.val();
          nome = dadosUsuario.nome_usuario
          // console.log(dadosUsuario.nome_usuario);
        });
      });

    return nome
  }
  //acessa todos os dados do usuário do autenticado 
  public acessarDadosUsuario(email: string): Promise<string> {
    return new Promise((resolve, reject) => {
      firebase.database().ref(`usuario_detalhe/${btoa(email)}`)
        .on('value', (snapshot: any) => {
          let nome: string = "";
          snapshot.forEach((childSnapshot: any) => {
            const dadosUsuario = childSnapshot.val();
            nome = dadosUsuario
          });
          resolve(nome);
        }, (error: any) => {
          reject(error);
        });
    });
  }
  

  // acessa dados do produto
  public async acessarDadosProduto(email: string): Promise<string> {
    return new Promise((resolve, reject) => {
      let nome: string = "";
      firebase.database().ref(`produtos/${btoa(email)}`)
        .on('value', (snapshot: any) => {
          snapshot.forEach((childSnapshot: any) => {
            const dadosUsuario = childSnapshot.val();
            nome = dadosUsuario.nome_usuario
            console.log(dadosUsuario);
          });
          resolve(nome);
        }, (error: any) => {
          reject(error);
        });
    });
  }



}


