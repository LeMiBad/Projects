import React, { useEffect, useState } from 'react'
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

    let startX = 0
    let vector = ''
    const touchSlide = (e: React.TouchEvent<HTMLDivElement>) => {
        if(e.touches[0].clientX > startX) vector = 'right'
        else vector = 'left'
    }
    const touchEnd = () => {
        if(vector === 'right') rightSlide()
        if(vector === 'left') leftSlide()
    }

    return (
        <>
            <div className={css.next}>{projectName}</div>
            <div className={css.ProjectCardWrapper}>
                <div className={css.backers}></div>
                <div className={css.ProjectCard}>
                    <div onTouchEnd={touchEnd} onTouchStart={(e) => {startX = e.touches[0].clientX}} onTouchMove={(e: React.TouchEvent<HTMLDivElement>) => touchSlide(e)} style={{ background: `url('${images[imageIndex]}')`}} className={css.slider}>
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