import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous-comp',
  template:`<h2>Marvellous Infosystems</h2>
  <input type="text" size="30"><br><br>
  marvellous-comp works!`,
  styles:[`h2{
          color:blue;
  }`]
})
export class MarvellousCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
