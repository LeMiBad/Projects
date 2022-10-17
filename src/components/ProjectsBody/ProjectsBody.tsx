import { useStore } from 'effector-react'
import { $projectData } from '../../store/projectsModel'
import Header from '../Header/Header'
import ProjectCard from '../ProjectCard/ProjectCard'
import css from './ProjectsBody.module.sass'

const ProjectsBody = () => {
    const projectData = useStore($projectData)

    return (
        <>
            <Header />
            <h1 className={css.prof}>Frontend</h1>
            <h1 className={css.profTwo}>Developer</h1>
            {projectData.map((card, key) => <ProjectCard key={key} id={key} projectName={card.projectName} icons={card.icons} projectUrl={card.projectUrl} images={card.images}/>)}
        </>
    )
}

export default ProjectsBody