import { useState } from 'react'
import css from './ProjectCard.module.sass'

interface ProjectCardProps {
    data: {
        projectName: string
        projectUrl: string
        images: Array<string>
    }
} 

const ProjectCard = ({data}: ProjectCardProps) => {

    const {projectName, projectUrl, images} = data
    const [imageIndex, setImageIndex] = useState(0)

    const leftSlide = () => {
        if(!imageIndex) setImageIndex(images.length-1)
        else setImageIndex(imageIndex-1)
    }

    const rightSlide = () => {
        if(imageIndex === images.length-1) setImageIndex(0) 
        else setImageIndex(imageIndex+1)
    }

    return (
        <>
            <div className={css.next}>{projectName}</div>
            <div className={css.ProjectCardWrapper}>
                <div className={css.backers}></div>
                <div className={css.ProjectCard}>
                    <div style={{ background: `url('${images[imageIndex]}')`}} className={css.slider}>
                        <span onClick={leftSlide} className={css.left}>{'<'}</span>
                        <span onClick={rightSlide} className={css.right}>{'>'}</span>
                    </div>
                    <div className={css.links}>
                        <a>Подробнее</a>
                        <a target='blank' href={projectUrl}>Перейти</a>
                    </div>
                </div>
                <div className={css.backers}></div>
            </div>
        </>
    )
}

export default ProjectCard