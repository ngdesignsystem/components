import {
  Component,
  OnInit
} from "@angular/core";


@Component({
  selector: "a-ButtonA",
  
  
  
  template: `
    <ng-content></ng-content>
  `
})
export class ButtonAComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
   
  }

}
