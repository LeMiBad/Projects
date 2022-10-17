export interface ProjectInfoProps {
    projectName: string
    projectUrl: string
    images: Array<string>
    icons: ProjectHeaderProps
    id: number
}

export interface ProjectHeaderProps {
    js: boolean
    react: boolean
    ts: boolean
    redux: boolean
    html: boolean
    git: boolean
    npm: boolean
    sass: boolean
    node: boolean
}