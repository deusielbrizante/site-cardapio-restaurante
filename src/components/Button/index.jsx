import styles from "./Button.module.css"
import Image from "next/image"

export default function Button({ handleFilter, name, buttonClicked, image }) {
    return (
        <li className={styles.categories}>
            <button className={name === buttonClicked ? styles.on : styles.off} onClick={() => handleFilter(name)}>
                <Image className={styles.categories_icon} src={image} />
                <p className={styles.title}>{name}</p>
            </button>
        </li>
    )
}