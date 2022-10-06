import ProjectCard from '../ProjectCard/ProjectCard'
import css from './ProjectsBody.module.sass'

const ProjectsBody = () => {
    return (
        <>
            <h1 className={css.prof}>Frontend</h1>
            <h1 className={css.profTwo}>Developer</h1>
            <ProjectCard />
            <ProjectCard />
        </>
    )
}

export default ProjectsBody