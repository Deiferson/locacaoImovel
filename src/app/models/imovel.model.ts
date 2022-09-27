import { Endereco } from "./endereco.model"

export interface Imovel {
    id?: number
    nome: string
    imovelId: number
    endereco: Endereco[]
}