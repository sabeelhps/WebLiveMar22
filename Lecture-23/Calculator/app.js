const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');

for (let btn of buttons) {
    btn.addEventListener('click', (e) => {
        const btnText = btn.innerText;
       
        if (btnText === 'C') {
            screen.value = "";
        }
        else if (btnText === 'X') {
            screen.value += '*';
        }
        else if (btnText === '=') {
            try {
                screen.value = eval(screen.value);
            }
            catch (e) {
                screen.value = 'Invalid Operation';
            }
        }
        else {
            screen.value = screen.value + btnText;
        }
    });
}