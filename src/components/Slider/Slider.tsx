import { useState } from "react"
import css from './Slider.module.sass'

const Slider = ({images}: {images: Array<string>}) => {
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
            <div onTouchEnd={touchEnd} onTouchStart={(e) => {startX = e.touches[0].clientX}} onTouchMove={(e: React.TouchEvent<HTMLDivElement>) => touchSlide(e)} style={{ background: `url('${images[imageIndex]}')`}} className={css.slider}>
                <span onClick={leftSlide} className={css.left}>{'<'}</span>
                <span onClick={rightSlide} className={css.right}>{'>'}</span>
            </div>
        </>
    )
}

export default Slider