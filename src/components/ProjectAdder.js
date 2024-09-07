import { Project } from "./Project";
import { Todo } from "./Todo";
import { format } from "../../node_modules/date-fns";

export class ProjectAdder {
    static addDummyContent(projectsManager){
        let project1 = new Project("Home Tasks");
        let project2 = new Project("School Tasks");

        project1.addTodo(new Todo("clean the rug", "clean with vacuum cleaner", 
            format(new Date(), "LLL do"), "low"));
        project1.addTodo(new Todo("walk the dog", "walk shelly around the neighborhood", 
            format(new Date(2024, 5, 8), "LLL do"), "high"));
        project2.addTodo(new Todo("finish math homework", "finish problem sets from chp. 2", 
            format(new Date(2021, 1, 2), "LLL do"), "high"));
        
        projectsManager.addProject(project1);
        projectsManager.addProject(project2);
    }
}