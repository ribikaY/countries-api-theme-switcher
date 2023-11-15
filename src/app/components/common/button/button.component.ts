import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() classname: string = "";
  //to output an event
  @Output() btnClick = new EventEmitter()

  onClick(){
    this.btnClick.emit();
  }
}
