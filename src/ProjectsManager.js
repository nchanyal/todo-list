export class ProjectsManager {
    #listOfProjects;

    constructor(){
        this.#listOfProjects = [];
    }

    addProject(projectObject){
        this.#listOfProjects.push(projectObject);
    }

    removeProject(indexOfProjectObject){
        this.#listOfProjects.splice(indexOfProjectObject, 1);
    }

    getProject(indexOfProjectObject){
        return this.#listOfProjects[indexOfProjectObject];
    }

    get listOfProjects(){
        return this.#listOfProjects;
    }
}