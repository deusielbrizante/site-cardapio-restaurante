import styles from "./Categories.module.css"
import Button from "../Button"

import iconEntrada from "../../../public/assets/entrada.png"
import iconBebidas from "../../../public/assets/bebidas.png"
import iconCarne from "../../../public/assets/carne.png"
import iconMassa from "../../../public/assets/massa.png"
import iconSalada from "../../../public/assets/salada.png"
import iconSobremesa from "../../../public/assets/sobremesa.png"

export default function Categories({ handleFilter, typeButtonClicked }) {
    return (
        <section>
            <ul className={styles.ul}>
                <Button name="Entradas" image={iconEntrada} handleFilter={handleFilter} buttonClicked={typeButtonClicked} />
                <Button name="Massas" image={iconMassa} handleFilter={handleFilter} buttonClicked={typeButtonClicked} />
                <Button name="Carnes" image={iconCarne} handleFilter={handleFilter} buttonClicked={typeButtonClicked} />
                <Button name="Bebidas" image={iconBebidas} handleFilter={handleFilter} buttonClicked={typeButtonClicked} />
                <Button name="Saladas" image={iconSalada} handleFilter={handleFilter} buttonClicked={typeButtonClicked} />
                <Button name="Sobremesas" image={iconSobremesa} handleFilter={handleFilter} buttonClicked={typeButtonClicked} />
            </ul>
        </section>
    )
}