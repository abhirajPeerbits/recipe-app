import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  

  @HostBinding('class.open') isOpen = false;
  //class.open : class is array of all classess and open is one  of class we need to attach dinamically   
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  } 
  constructor() { }

}
