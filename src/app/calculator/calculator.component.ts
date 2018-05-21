import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {


   yeni="dsf";
  buttonTexts = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ",", "0", "="];
  screenText = "0";
  defValue = "";
  latsOperation = "";
  g="sdf";

  
  onClick(value) { 
    if (value == "=") {
      this.calculate();
     
    }
    else {
      if (this.screenText == "0")
        this.screenText = "";
      this.screenText += value;
      
    }

  }

  onClear() {
    
    this.screenText = "0";
  }

  calculate() {
    let result = 0;
    if (this.latsOperation == "+")
      result = Number(this.defValue) + Number(this.screenText);
    if (this.latsOperation == "-")
      result = Number(this.defValue) - Number(this.screenText);
    if (this.latsOperation == "/")
      result = Number(this.defValue) / Number(this.screenText);
    if (this.latsOperation == "x")
      result = Number(this.defValue) * Number(this.screenText);
    this.screenText = result.toString();

  }

  pressButton(operation) {
    this.defValue = this.screenText;
    this.latsOperation = operation;
   // this.screenText = " ";
  }

}
