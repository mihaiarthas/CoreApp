import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "app/components/home/home.component";
import { AboutComponent } from "app/components/about/about.component";
import { ContactComponent } from "app/components/contact/contact.component";


const routes: Routes = [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },                   
            { path: 'about', component: AboutComponent },       
            { path: 'contact', component: ContactComponent}
        ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
        HomeComponent,
        AboutComponent,
        ContactComponent
];