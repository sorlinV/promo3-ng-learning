import { Routes } from "@angular/router"
import { BoucleComponent } from "./boucle/boucle.component";
import { ListeChienComponent } from "./liste-chien/liste-chien.component";
import { TodoSecondComponent } from "./todo-second/todo-second.component";
import { TodoComponent } from "./todo/todo.component";
import { TemplateComponent } from "./template/template.component";
import { NotfoundComponent } from "./notfound/notfound.component";

export const appRoutes:Routes = [
    {path: 'boucle', component: BoucleComponent},
    {path: 'template', component: TemplateComponent},
    {path: 'liste-chien', component: ListeChienComponent},
    {path: 'todo', component: TodoComponent},
    {path: 'todo2', component: TodoSecondComponent},
    {path: '', pathMatch: 'full', redirectTo: 'liste-chien'},
    {path: '**', component: NotfoundComponent}
]