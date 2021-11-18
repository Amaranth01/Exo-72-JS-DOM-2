let p = document.getElementsByClassName('p');
let classN = document.getElementsByClassName('name-tag');

for (let i = 0; i < classN.length; i++) {
    let text = document.createElement('p').innerHTML= 'HELLO WORLD !';
    classN[i].append(text);
}








