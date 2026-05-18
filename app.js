'use strict'

import { getContatos, postContato, putContato, deleteContato } from "./contatos.js"

const novoContato = {
    "nome": "fique esperto brayan...nikito te observa.",
    "celular": "11 9 7171-6464",
    "foto": "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869121.jpg",
    "email": "ana@gmail.com",
    "endereco": "Av. São Joaquim, 234",
    "cidade": "Sorocaba"
}

console.log(await deleteContato(56 ))
