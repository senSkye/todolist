// stap 1
let marah = document.querySelector('.mode-marah');
let senang = document.querySelector('.mode-senang');
let mecha = document.querySelector('.mode-mecha');
let target = document.querySelector('.mode-target');
let Sedih = document.querySelector('.mode-sedih');
let btnNextStap = document.querySelector('.btn-next-stap');
let stapOne = document.querySelector('.stap-one');
let stapTow = document.querySelector('.stap-tow');
let body = document.querySelector('body');

btnNextStap.addEventListener('click', () => {
    stapOne.className = 'stap-one active';
    stapTow.className = 'stap-tow active';
});

function resetMode() {
    body.classList.remove('marah', 'senang', 'mecha', 'target', 'sedih');
    marah.classList.remove('active-marah');
    senang.classList.remove('active-senang');
    mecha.classList.remove('active-mecha');
    target.classList.remove('active-target');
    Sedih.classList.remove('active-sedih');
}


marah.addEventListener('click', () => {
    resetMode();
    marah.classList.toggle('active-marah');
    body.classList.toggle('marah');
});

senang.addEventListener('click', () => {
    resetMode();
    senang.classList.toggle('active-senang');
    body.classList.toggle('senang');
});

mecha.addEventListener('click', () => {
    resetMode();
    mecha.classList.toggle('active-mecha');
    body.classList.toggle('mecha');
});


target.addEventListener('click', () => {
    resetMode();
    target.classList.toggle('active-target');
    body.classList.toggle('target');
});

Sedih.addEventListener('click', () => {
    resetMode();
    Sedih.classList.toggle('active-sedih');
    body.classList.toggle('sedih');
});



// stap 2

let label = document.querySelector('.label');
let input = document.getElementById('input');
let buat = document.getElementById('buat');
let titleTow = document.querySelector('.stap-tow-output-title');
let daftar = document.querySelector('.daftar');
let hapus = document.querySelector('.hapus');

label.textContent = 'judul';
console.log(label.textContent);


input.addEventListener('focus', () => {
    label.style.top = '0';
})

input.addEventListener('blur', () => {
    label.style.top = '1.1rem';
})

buat.addEventListener('click', () => {
    let isiText = input.value.trim();
    if (isiText.length <= 2) {
        alert('isi input dengan benar');
        return;
    }
    if (label.textContent == 'judul') {
        titleTow.textContent = isiText;
        input.value = '';
        label.textContent = 'daftar';
    } else {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const text = document.createTextNode(isiText);

        li.appendChild(checkbox);
        li.appendChild(text);
        daftar.appendChild(li);
        input.value = '';
        input.focus();

        checkbox.addEventListener('click', () => {
            li.classList.toggle('done');
        })
    }
})


hapus.addEventListener('click', () => {
    location.reload(true);
})

