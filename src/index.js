module.exports = function toReadable (number) {
    let numStr = number.toString();
    let uniqueNum = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 
    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tensNum = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let hundreds = numStr[0];

    if(hundreds > 0) {
        if(numStr.length < 3 && number < 20)
            return uniqueNum[number % 100 - 1];
        else if(numStr.length < 3 && number >= 20)
            return tensNum[numStr[0] - 2] + (numStr[1] == 0 ? '' : ' ' + uniqueNum[numStr[1] - 1]);
        else if(number % 100 === 0)
            return uniqueNum[hundreds - 1] + " hundred";
        else if(number % 100 < 20)
            return uniqueNum[hundreds - 1] + " hundred " + uniqueNum[number % 100 - 1];
        else if(numStr[2] == 0)
            return uniqueNum[hundreds - 1] + " hundred " + tensNum[numStr[1] - 2];
        else
            return uniqueNum[hundreds - 1] + " hundred " + tensNum[numStr[1] - 2] + ' ' + uniqueNum[numStr[2] - 1];
    }

  return 'zero';
}
