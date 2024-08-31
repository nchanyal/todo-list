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
}