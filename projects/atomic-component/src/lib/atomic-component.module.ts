import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GithubButtonComponent } from "./components/github-button/github-button.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ResourceLinkComponent } from "./components/resource-link/resource-link.component";
import { CircleLinkComponent } from "./components/circle-link/circle-link.component";
import { RocketBadgeComponent } from "./components/rocket-badge/rocket-badge.component";
import { HeaderComponent } from "./components/header/header.component";
import { StepButtonComponent } from "./components/step-button/step-button.component";
import { TestAComponent } from './components/test-a/test-a.component';
import { ButtonAComponent } from './components/button-a/button-a.component';
import { ButtonGroupAComponent } from './components/button-group-a/button-group-a.component';

@NgModule({
  declarations: [
    GithubButtonComponent,
    FooterComponent,
    HeaderComponent,
    ResourceLinkComponent,
    CircleLinkComponent,
    RocketBadgeComponent,
    StepButtonComponent,
    TestAComponent,
    ButtonAComponent,
    ButtonGroupAComponent,
  ],
  imports: [CommonModule],
  exports: [
    GithubButtonComponent,
    FooterComponent,
    HeaderComponent,
    ResourceLinkComponent,
    CircleLinkComponent,
    RocketBadgeComponent,
    StepButtonComponent,
    TestAComponent,
    ButtonAComponent,
    ButtonGroupAComponent,
  ],
})
export class AtomicComponentModule {}
