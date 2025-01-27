import Categoria from "./Categoria";

export default interface Produto {
    id: number;
    nome: string;
    categoria: Categoria | null;
    preco: number;
    foto: string;
    
}