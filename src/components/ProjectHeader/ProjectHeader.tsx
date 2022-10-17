import css from './ProjectHeader.module.sass' 
import JsIcon from '../Icons/JsIcon'
import NpmIcon from '../Icons/NpmIcon'
import GitIcon from '../Icons/GitIcon'
import SassIcon from '../Icons/SassIcon'
import ReactIcon from '../Icons/ReactIcon'
import TsIcon from '../Icons/TsIcon'
import ReduxIcon from '../Icons/ReduxIcon'
import NodeIcon from '../Icons/NodeIcon'
import HtmlIcon from '../Icons/HtmlIcons'
import { ProjectHeaderProps } from '../../types/props'
import { useEffect, useState } from 'react'



const ProjectHeader = ({icons}: {icons: ProjectHeaderProps}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerHeight/100*20)
    
    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(window.innerHeight/100*20))
    }, [windowWidth])

    return (
        <div className={css.wrapper}>
            <div className={css.iconsWrapper}>
                {(icons.js)? <JsIcon size={windowWidth}/> : null} 
                {(icons.react)? <ReactIcon size={windowWidth}/> : null}
                {(icons.ts)? <TsIcon size={windowWidth}/> : null}
                {(icons.redux)? <ReduxIcon size={windowWidth}/> : null}
                {(icons.html)? <HtmlIcon size={windowWidth}/> : null}
                {(icons.html)? <GitIcon size={windowWidth}/> : null}
                {(icons.npm)? <NpmIcon size={windowWidth}/> : null}
                {(icons.sass)? <SassIcon size={windowWidth}/> : null}
                {(icons.node)? <NodeIcon size={windowWidth}/> : null}
            </div>
        </div>
    )
}   

export default ProjectHeader