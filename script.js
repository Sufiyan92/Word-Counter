let ip = document.querySelector('#textArea')
let word = document.querySelector('#word')
let char = document.querySelector('#char')

ip.addEventListener('input', function () {
    let type = this.value
    // counting character
    let Ccount = 0
    for (let i = 0; i < type.length; i++) {
        if (type[i] !== ' ') {
            Ccount++;
        }
    }
    char.innerHTML = Ccount

    // counting words
    let warr = type.split(' ')
    let Cword = 0;
    for (let i = 0; i < warr.length; i++) {
        if (warr[i] !== '') {
            Cword++;
        }
    }
    word.innerHTML = Cword
})