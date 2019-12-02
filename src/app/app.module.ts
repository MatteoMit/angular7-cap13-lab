import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms"; // 1
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";

@NgModule({
  declarations: [AppComponent, TemplateDrivenFormComponent],
  imports: [
    BrowserModule,
    FormsModule // 2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
