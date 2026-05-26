'use strict'

import { getContatos, postContato, putContato, deleteContato} from "./contatos.js"

const novoContato = {
    "nome": "fique esperto lucas...nikito te observa.",
    "celular": "11 9 7171-6464",
    "foto": "https://www.imdb.com/title/tt6814884/mediaviewer/rm1210016000/",
    "email": "ana@gmail.com",
    "endereco": "Av. São Joaquim, 234",
    "cidade": "Sorocaba"
}

console.log(await postContato(novoContato))
