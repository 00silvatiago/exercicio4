import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
  result : string;
  constructor() { }

  calcClick(el) : void {
    switch (el) {
      case "AC": 
        this.result = '';
        break;
      case "=": 
        try {
          this.result = eval(this.result);
        } catch(e) {
          this.result = "error";
        }
        
        break;
        default:
        this.result += el;
    }
  }

  ngOnInit() {
  }

}
