function checkPreformatting(event, format, input, errorMessage) {
  let inputVal = input.value;

  // if it was a deletion, we need to remove formatting characters rather than add them
  if ((event.keyCode || event.charCode) == 8) {
    // if the only characters left to be deleted are formatting characters, delete them now
    let remainingFormat = format.substring(0, inputVal.length);
    let nothingLeft = false;
    if (inputVal.length > 0 && !remainingFormat.includes('X') && !remainingFormat.includes('#')) {
      inputVal = '';
      nothingLeft = true;
    }

    if (!nothingLeft) {
      let i = inputVal.length - 1;
      while (i >= 0 && isFormattingChar(format[i])) {
        inputVal = inputVal.slice(0, -1);
        --i;
      }
    }
  }
  // if it was an insertion, we need to add any formatting characters necessary
  else {
    for (let i = 0; i < inputVal.length; ++i) {
      if (inputVal[i] !== format[i] && isFormattingChar(format[i])) {
        inputVal = inputVal.substring(0, i) + format[i] + inputVal.substring(i, inputVal.length);
      }
      if (i + 1 == format.length) {
        break;
      }
    }
    // if the only characters left in the format are formatting characters, add them in now
    let remainingFormat = format.substring(inputVal.length, format.length);
    if (remainingFormat.length > 0 && !remainingFormat.includes('X') && !remainingFormat.includes('#')) {
      inputVal += remainingFormat;
    }
    // one more length check (mainly for copy + paste)
    if (inputVal.length > format.length) {
      inputVal = inputVal.substring(0, format.length);
    }
  }
  if (errorMessage !== undefined) {
    changeErrorMessage(input, errorMessage, inputVal, format);
  }
  input.value = inputVal;
}

function isFormattingChar(char) {
  return char !== undefined && char !== 'X' && char !== '#';
}

function checkPreformattingDigits(inputVal, format) {
  // don't need to check if there are no digit-only inputs
  if (!format.includes('#')) {
    return true;
  }

  // return false if any # in format does not match up with a digit
  for (let i = 0; i < format.length; ++i) {
    if (format[i] === '#' && (inputVal[i] < '0' || inputVal[i] > '9')) {
      return false;
    }
  }

  // return true if everything checks out
  return true;
}

function changeErrorMessage(input, errorMessage, inputVal, format) {
  if (!checkPreformattingDigits(inputVal, format)) {
    input.style.borderColor = 'red';
    errorMessage.style.visibility = 'visible';
  }
  else {
    input.style.borderColor = 'black';
    errorMessage.style.visibility = 'hidden';
  }
}