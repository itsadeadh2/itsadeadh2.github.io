import BaseAPI from './http'

export type project = {
    description: string,
    docs_link?: string
    github_link: string,
    language: string,
    name: string,
    stack: string,
    id: number
}

export default class ProjectsApi extends BaseAPI {

    getProjects = async (language: string) => {
        try {
            const {data} = await this.http.get(`/projects/?language=${language}`)
            return data as project[];
        } catch (error) {
            return null;
        }
    }
}