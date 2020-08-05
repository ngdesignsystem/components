import {
  Component,
  OnInit
} from "@angular/core";


@Component({
  selector: "a-ComponentName",
  
  
  
  template: `
    <ng-content></ng-content>
  `
})
export class ComponentNameComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
   
  }

}
