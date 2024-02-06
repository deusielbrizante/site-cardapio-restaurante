import { produtos } from "../data/produtos";

export const searchProduct = (text) => {
    return (
        produtos.filter((produto) => (
            produto.nome.toLowerCase().includes(text.toLowerCase()) || produto.descricao.toLowerCase().includes(text.toLowerCase())
        ))
    )
}

export const filterProduct = (category) => produtos.filter((produto) => produto.categoria === category)

export const productsEntrada = filterProduct("Entradas")