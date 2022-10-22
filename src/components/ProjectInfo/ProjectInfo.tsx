import { $currentProject } from "../../store/projectsModel"
import { useStore } from "effector-react"
import ProjectHeader from "../ProjectHeader/ProjectHeader"
import css from './ProjectInfo.module.sass'
import { Link } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel'

const ProjectInfo = () => {
    const {projectName, projectUrl, images, icons, desc} = useStore($currentProject)
    window.scrollTo(0, 0)

    return (
        <>
            <ProjectHeader icons={icons}/>
            <div className={css.wrapper}>
                <h1 className={css.projectName}>{projectName}</h1>
                <div className={css.projectDesc}>{desc}</div>
                <div className={css.ProjectCard}>
                    <div style={{width: "80%", margin: '5vh auto'}}>
                        <Carousel infiniteLoop showStatus={false} showThumbs={false}>
                            {images.map((img, i) => <div key={i}><img alt="projectImg" src={img}></img></div>)}
                        </Carousel>
                    </div>
                    <div className={css.links}>
                        <Link to={'/Projects'}>Назад</Link>
                        <a target='blank' href={projectUrl}>Перейти</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectInfo