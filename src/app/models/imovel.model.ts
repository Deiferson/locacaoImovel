import { Endereco } from "./endereco.model"

export interface Imovel {
    id?: number
    nome: string
    tipo: string
    valor: number
    condominio: number
    quartos: number
    banheiros: number
    area: number
    venda: boolean
    aluguel: boolean
    dataAnuncio: Date
    endereco: Endereco[]
}