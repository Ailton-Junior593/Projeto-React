
import "./styles.css"
import mainimage  from "./tecnologia.jpeg"

function Header() {
    return(
        <header>
            <h1>Meu Blog!</h1>
            <img src={mainimage} alt="Foto de Tecnologia" />
        </header>

    );
}

export default Header;