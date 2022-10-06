import { useState } from 'react'
import css from './ProjectCard.module.sass'

const ProjectCard = () => {

    const [imageIndex, setImageIndex] = useState(0)
    const images = ['https://user-images.githubusercontent.com/97335217/183980254-11f4ba13-20a9-4d0d-9ac9-fa30685172d9.png', 'https://user-images.githubusercontent.com/97335217/183980305-f51d686b-a94e-4625-a38e-18b716030748.png']

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
            <div className={css.next}>React-Game</div>
            <div className={css.ProjectCardWrapper}>
                <div className={css.backers}></div>
                <div className={css.ProjectCard}>
                    <div style={{ background: `url('${images[imageIndex]}')`}} className={css.slider}>
                        <div onClick={leftSlide} className={css.left}>{'<'}</div>
                        <div onClick={rightSlide} className={css.right}>{'>'}</div>
                    </div>
                    <div className={css.links}>
                        <div>e</div>
                        <div>e</div>
                    </div>
                </div>
                <div className={css.backers}></div>
            </div>
        </>
    )
}

export default ProjectCard