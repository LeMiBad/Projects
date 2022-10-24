import { useEffect, useRef, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import { pickIndex } from '../../store/projectsModel'
import {ProjectInfoProps} from '../../types/props'
import css from './ProjectCard.module.sass'

const ProjectCard = (cardInfo: ProjectInfoProps) => {
    const {projectName, projectUrl, images, id} = cardInfo


    const back = useRef() as React.MutableRefObject<HTMLDivElement>
    const [animation, setAnimation] = useState(css.none)

    useEffect(() => {
        const scrollListener = (e: any) => {
            if(back.current.offsetTop - window.innerHeight + 1 <= e.path[1].scrollY) {
                setAnimation(css.enter)
            }
        }
        document.addEventListener('scroll', scrollListener)
        return () => document.removeEventListener('scroll', scrollListener)
    }, [])

    return (
        <>
            <div ref={back} className={`${css.projectCard} ${animation}`}>
                <div className={css.name}>{projectName}</div>
                <Carousel infiniteLoop showStatus={false} showThumbs={false}>
                    {images.map((img, i) => <div key={i}><img alt='projectImg' src={img}></img></div>)}
                </Carousel>
                {/* <Slider images={images}/> */}
                <div className={css.links}>
                    <Link onClick={() => {pickIndex(id)}}  to='/Projects/project'>Подробнее</Link>
                    <a target='blank' href={projectUrl}>Перейти</a>
                </div>
            </div>
        </>
    )
}

export default ProjectCard