import css from './Header.module.sass'
import git from './git.svg'

const Header = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.name}><span>Леонид</span><span>Михеев</span></div>
            <div className={css.face}></div>
            <a target={'blank'} href={'https://github.com/LeMiBad'}><img style={{width: '100%'}} alt={'gitIcon'} src={git}></img></a>
            {/* <a target={'blank'} href={'https://github.com/LeMiBad'}>Git</a> */}
        </div>
    )
}

export default Header