import { DOM_Manipulator } from "../components/DOM_Manipulator";
import { ProjectsManager} from "../components/ProjectsManager";
import { Project } from "../components/Project";
import { Todo } from "../components/Todo";
import { ProjectAdder } from "../components/ProjectAdder";

export class UI_Controller {
    #projectsManager;

    constructor(){
        this.#projectsManager = new ProjectsManager();
    }

    initalizeApp(){
        ProjectAdder.addDummyContent(this.#projectsManager);
        DOM_Manipulator.generateInitialWebpage(this.#projectsManager.listOfProjects, this.#projectsManager.getProject(0).nameOfProject, this.#projectsManager.getProject(0).listOfTodos);
    }
}