import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'codertrack';

  input_1 = '995144900824012405238259418456758068524921';
  input_2 = '879161138176194604342893336019619756243251';

  input_1Length: number;
  input_2Length: number;
  sum: string;

  // problem2 param
  problem2Input = [
    '9514490',
    '824012 ',
    '4052382',
    '5941845',
    '6758068',
    '5249218',
    '7916113',
    '8176194',
    '6043428',
    '9333601',
    '9619756',
    '2432512',
    '4994251',
    '5123945',
    '1729387',
    '605651 ',
    '332276 ',
    '7902627',
    '6986261',
    '8501250',
    '6190241',
    '3988721',
    '8688295',
    '2675753',
    '9601116',
    '8562801',
    '4648173',
    '7439393',
    '5024977',
    '8148385',
    '9328108',
    '915834 ',
    '5240810',
    '5045312',
    '1608780',
    '2782212',
    '1596861',
    '8230312',
    '3493557',
    '9773959',
    '7862280',
    '3309815',
    '4465316',
    '4163053',
    '6855762',
    '3671757',
    '1526986',
    '8374303',
    '1594242',
    '7472338',
    '8649059',
    '6202657',
    '1756596',
    '8441836',
    '4496134',
    '7243074',
    '9579012',
    '6256650',
    '3680406',
    '1332002',
    '8100556',
    '9040322',
    '9319294',
    '2914599',
    '6398806',
    '350310 ',
    '9384565',
    '40926  ',
    '9489090',
    '8014358',
    '4509076',
    '3343558',
    '8523742',
    '8529828',
    '53389  ',
    '4577936',
    '4515918',
    '5657743',
    '5655280',
    '2355046',
    '2645962',
    '9862797',
    '61570  ',
    '1229491',
    '5296613',
    '641931 ',
    '482199 ',
    '8597395',
    '2166095',
    '3917552',
    '6611948',
    '3053514',
    '1048473',
    '1901495',
    '7327398',
    '514024 ',
    '783218 ',
    '6631626',
    '682538 ',
    '97033  ',
    '5167189',
    '8184963',
    '5030847',
    '8352250',
    '6448309',
    '2702451',
    '7311268',
    '3513121',
    '6687261',
    '5913357',
    '2026084',
    '8698007',
    '4602704',
    '7910152',
    '5062995',
    '7590796',
    '8416497',
    '6108453',
    '9925337',
    '6664149',
    '2991669'
  ];

  longestLength = 0;
  problem2InputWithPadding = Array<string>();
  sumOfProblem2 = '';
  // end problem2 param

 ngOnInit() {
   this.sum = this.calculate(this.input_1, this.input_2);

   this.longestLength = this.findTheLongestLengthOfInput(this.problem2Input);
   this.problem2InputWithPadding = this.paddingZeroLeft(this.problem2Input, this.longestLength);
   console.log('after padding: ', this.problem2InputWithPadding);
   this.sumOfProblem2 = this.sumMoreThanTwoInput(this.problem2InputWithPadding);
 }

 calculate(input1: string, input2: string): string {
   let input1Num = 0;
   let input2Num = 0;
   let sum = '';
   let tempNum = 0;

   for (let index = input1.length; index > 0; index--) {

    let sumByChar = 0;
    let sumByCharStr = '';

    input1Num = Number.parseInt(input1.charAt(index - 1));
    input2Num = Number.parseInt(input2.charAt(index - 1));
    sumByChar = input1Num + input2Num + tempNum;

    sumByCharStr = sumByChar.toString();

    if (sumByCharStr.length > 1) {
      tempNum = Number.parseInt(sumByCharStr.charAt(0));
    } else {
      tempNum = 0;
    }

    sum = sumByCharStr.charAt(sumByCharStr.length - 1).concat(sum);

    if (index === 1 && tempNum > 0) {
      sum = tempNum.toString().concat(sum);
    }

  }
   return sum;
 }

  findTheLongestLengthOfInput(arrayInput: Array<string>): number {
    let longestLength = 0;

    arrayInput.forEach(eachInput => {

      eachInput = eachInput.trim();

      if (eachInput.length > longestLength) {
        longestLength = eachInput.length;
        console.log('new the longestLength is: ', longestLength);
      }

    });

    return longestLength;
  }

  paddingZeroLeft(arrayInput: Array<string>, longestLength: number): Array<string> {

    const newArrayInput = Array<string>();

    arrayInput.forEach(eachInput => {

      eachInput = eachInput.trim();

      if (eachInput.length < longestLength) {
        eachInput = eachInput.padStart(longestLength, '0');
      }

      console.log('new eachInput is: ', eachInput);
      newArrayInput.push(eachInput);

    });

    return newArrayInput;
  }

  sumMoreThanTwoInput(arrayInput: Array<string>) {
    let newSumOfTwoInput = '';
    const currentArrayInput = Array<string>();

    for (let index = 0; index < arrayInput.length - 1; index++) {

      if (newSumOfTwoInput === '') {
        newSumOfTwoInput = arrayInput[index];
      }

      if (arrayInput[index + 1].trim().length < newSumOfTwoInput.trim().length) {
        currentArrayInput[index + 1] = arrayInput[index + 1].padStart(newSumOfTwoInput.trim().length, '0');
      } else {
        currentArrayInput[index + 1] = arrayInput[index + 1];
      }

      console.log('sum of "', newSumOfTwoInput, '" and "', arrayInput[index + 1], '" is: ');
      newSumOfTwoInput = this.calculate(newSumOfTwoInput, currentArrayInput[index + 1]);
      console.log(newSumOfTwoInput);

    }
    return newSumOfTwoInput;
  }

}