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
        this.#addEventListeners();
    }

    #addEventListeners(){
        this.#addEventListenersToElementsOfProjectNavigation();
        this.#addEventListenersToElementsOfAddProjectDialog();
    }

    #addEventListenersToElementsOfProjectNavigation(){
        const addProjectButton = document.querySelector("#new-project-button");
        const addProjectDialog = document.querySelector("#add-project-dialog");
        addProjectButton.addEventListener("click", () => addProjectDialog.showModal());
    }

    #addEventListenersToElementsOfAddProjectDialog(){
        const addProjectDialog = document.querySelector("#add-project-dialog");
        const closeButton = document.querySelector("#close-button");
        const submitButton = document.querySelector("#submit-button");
        const projectNameInput = document.querySelector("#project_name");

        closeButton.addEventListener("click", () => addProjectDialog.close());
        submitButton.addEventListener("click", (event) => {
            if(!projectNameInput.validity.valueMissing){
                event.preventDefault();
                this.#projectsManager.addProject(new Project(projectNameInput.value));
                addProjectDialog.close();
                DOM_Manipulator.generateProjectNavigation(this.#projectsManager.listOfProjects);
                this.#addEventListenersToElementsOfProjectNavigation();
            }
        });
    }
}