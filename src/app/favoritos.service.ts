import * as firebase from "firebase";

export class Favoritos {

    public Favoritar(email: string, dados: any): void {
        firebase.database().ref(`favoritos/${btoa(email)}`)
            .push(dados)
            .then(() => {
                console.log('Favoritos funcionando')
            })
    }

   public consultarFavoritados(email: string): Promise<any> {

        return new Promise((resolve, reject) => {
            firebase.database().ref(`favoritos/${btoa(email)}`)
                .orderByKey()
                .once('value')
                .then((snapshot) => {
                    let produtos: Array<any> = []
                    snapshot.forEach((childSnapshot: any) => {
                        let publicacao = childSnapshot.val()
                        publicacao.key = childSnapshot.key
                        produtos.push(publicacao)
                        resolve(produtos)
                    })
                    return produtos.reverse()
                })
                .catch((err: Error) => {
                    reject(err);
                    console.error(err)
                })
        })
    }


}
