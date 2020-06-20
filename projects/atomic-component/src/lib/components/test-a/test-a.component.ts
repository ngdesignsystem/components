import {
  Component,
  OnInit
} from "@angular/core";


@Component({
  selector: "a-TestA",
  
  
  
  template: `
    <ng-content></ng-content>
  `
})
export class TestAComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
   
  }

}
