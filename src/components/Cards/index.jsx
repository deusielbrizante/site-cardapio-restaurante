import styles from "./Cards.module.css"
import Image from "next/image"

export default function Cards({ product }) {
    return (
        <div className={styles.card}>
            <Image className={styles.image} src={product.imagem} alt={product.nome} />
            <div className={styles.info}>
                <div>
                    <h3>{product.nome}</h3>
                    <small>{product.categoria}</small>
                    <p>{product.descricao}</p>
                </div>
                <div>
                    <span>{new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(product.preco)}</span>
                </div>
            </div>
        </div>
    )
}