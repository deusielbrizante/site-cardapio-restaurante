import styles from "./SearchField.module.css"
import Image from "next/image"

import lupa from "../../../public/assets/lupa.png"

export default function SearchField({ typedSearchText, handleSearch }) {

    return (
        <div className={styles.container}>
            <Image className={styles.lupa} src={lupa} alt="lupa" />
            <input type="text" value={typedSearchText} onChange={(event) => handleSearch(event.target.value)} placeholder="Pesquise aqui um dos pratos do nosso cardápio" />
        </div>
    )
}