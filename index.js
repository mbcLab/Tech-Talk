console.log("Hallo Bang");

// variable 3 let, const -> string, number (int, float), boolean, object
// let --> immutebale bisa diubah ubah
// const --> muteable g bisa diubah ubah

// let
// string
let ikram = "ikram"
console.log(ikram)

ikram = 'ikram andika ukar'
console.log(ikram)

// string numner
let angkaSatu = 1

angkaSatu = '1'

// boolean
let isPresence = true;

isPresence = false;

//const
const mbc = 'mbc'

console.log(mbc)

// function 3 --> funciton declarative, function impression, arrow funciton
// functiion declarative

function mbcLab() {
    return 'hallo mbc';
}

const mbcLab1 = function() {
    return 'hallo mbc 1'
}

const mbcLab2 = () => {
    console.log('hallo mbc 2')
}

console.log(mbcLab());
console.log(mbcLab1());
console.log(mbcLab2());

// perulangan
// for
for(let i=0; i<3; i++) {
    console.log(i)
}

// js web

const tambahFooter = document.querySelector('footer'); // seleksi si footer yan punya class footer
const container = document.createElement('div');
container.innerText = "Hai";
// container.classList.add("footer--container");
// const footerContainer = document.querySelector('footer--container')


tambahFooter.appendChild(container)
