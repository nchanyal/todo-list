export class DOM_Manipulator {
    static generateHeader(){
        const contentDiv = document.querySelector("#content");
        const headerDiv = document.createElement("div");
        const paragraphTag = document.createElement("p");

        headerDiv.setAttribute("id", "header");
        paragraphTag.textContent = "Todo List";

        headerDiv.appendChild(paragraphTag);
        contentDiv.appendChild(headerDiv);
    }

    static generateDirectoryOfProjects(arrayOfProjects){
        const contentDiv = document.querySelector("#content");
        const projectsDiv = document.createElement("div");

        for(const project of arrayOfProjects){
            const buttonElement = document.createElement("button");
            buttonElement.textContent = project.nameOfProject;
            projectsDiv.appendChild(buttonElement);
        }

        contentDiv.appendChild(projectsDiv);
    }
}