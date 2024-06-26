import { Link } from 'react-router-dom'
import { Button } from '../Button'
import style from './Header.module.css'
import { ButtonVariant } from '../Button/Button.costants'

interface IHeader{
    showReturn?: boolean
}

export function Header({showReturn}: IHeader) {
    return(
    <header className={style.header}>
    <Link to="/admin">
        <Button variant={ButtonVariant.Outlined}>Tenho um abrigo</Button>
        </Link>

        {showReturn && (
        <Link to="/pets">
            <Button variant={ButtonVariant.Text}>Voltar</Button>
            </Link>
        )}
    </header>
    )
}