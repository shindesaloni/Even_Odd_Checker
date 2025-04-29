function checkEvenOdd() {
    const number = document.getElementById('number').value;
    const result = document.getElementById('result');
    
    if (number === '') {
        result.textContent = 'Please enter a number!';
        result.style.color = 'red';
    } else {
        if (number % 2 === 0) {
            result.textContent = 'The number is Even.';
            result.style.color = 'green';
        } else {
            result.textContent = 'The number is Odd.';
            result.style.color = 'blue';
        }
    }
}
