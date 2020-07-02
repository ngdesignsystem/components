import {
  Component,
  OnInit
} from "@angular/core";


@Component({
  
  selector: "m-ButtonGroupA",
  
  
  template: `
    <ng-content></ng-content>
  `
})
export class ButtonGroupAComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
   
  }

}
