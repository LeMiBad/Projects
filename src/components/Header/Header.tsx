import css from './Header.module.sass'

const Header = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.name}><span>Леонид</span><span>Михеев</span></div>
            <div className={css.face}></div>
            <div>Some...</div>
        </div>
    )
}

export default Header