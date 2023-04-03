function solution(S) {
    // Remove all spaces and dashes from the string
    const numbersOnly = S.replace(/[\s-]/g, '');
    
    // Find the length of the numbersOnly string
    const n = numbersOnly.length;
    
    // Calculate the number of blocks of three digits
    const blockNumbers = Math.floor(n / 3);
    
    // Calculate the length of the final block
    const blockLength = n % 3 === 1 ? 4 : n % 3 === 2 ? 2 : 0;
    
    // Initialize the result string with the first block of digits
    let result = numbersOnly.slice(0, 3);
    
    // Loop through the remaining blocks of digits and add them to the result string
    for (let i = 1; i < blockNumbers; i++) {
      const numberStart = i * 3;
      const endNumbers = numberStart + 3;
      result += '-' + numbersOnly.slice(numberStart, endNumbers);
    }
    
    // Add the final block of digits to the result string
    if (blockLength > 0) {
      const lastDigit = blockNumbers * 3;
      result += '-' + numbersOnly.slice(lastDigit, lastDigit + blockLength);
    }
    
    return result;
  }

let a = solution("00-44  48 5555 8361");
let b = solution("0 - 22 1985--324");
let y = solution("555372654");
console.log(a + " , " + b + " , " + y);

function solution() {
    const type = $("input[name='type']:checked").val();
  
    if (type === "person") {
      const firstName = $("#first_name").val().trim();
      const lastName = $("#last_name").val().trim();
      const email = $("#email").val().trim();
  
      const validFirstName = firstName.length > 0;
      const validLastName = lastName.length > 0;
      const validEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/.test(email);
  
      return validFirstName && validLastName && validEmail;
    } else if (type === "company") {
      const companyName = $("#company_name").val().trim();
      const phone = $("#phone").val().trim();
  
      const validCompanyName = companyName.length > 0;
      const validPhone = /^\d{6,}(-|\s)?(\d{3,}(-|\s)?)*\d{3,}$/.test(phone);
  
      return validCompanyName && validPhone;
    }
  
    // If type is neither "person" nor "company", the form is invalid.
    return false;
  }
  