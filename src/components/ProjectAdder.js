import { Project } from "./Project";
import { Todo } from "./Todo";

export class ProjectAdder {
    static addDummyContent(projectsManager){
        let project1 = new Project("Home Tasks");
        let project2 = new Project("School Tasks");

        project1.addTodo(new Todo("clean the rug", "clean with vacuum cleaner", "8/28/29", "low"));
        project1.addTodo(new Todo("walk the dog", "walk shelly around the neighborhood", "6/8/21", "high"));
        project2.addTodo(new Todo("finish math homework", "finish problem sets from chp. 2", "2/2/21", "high"));
        
        projectsManager.addProject(project1);
        projectsManager.addProject(project2);
    }
}