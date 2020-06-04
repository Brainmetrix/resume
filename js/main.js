// Normal js code
// const Typing = function (txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }
// // <!-- Type method -->
// Typing.prototype.type = function () {
//     // current index of words
//     const current = this.wordIndex % this.words.length;
//     // get full text of current words
//     const fullTxt = this.words[current];
//     // check if deleting
//     if (this.isDeleting) {
//         // Remove Char
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//         // add char
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }
//     // insert text into element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
//     // Initial Type Speed
//     let typeSpeed = 300;
//     if (this.isDeleting) {
//         typeSpeed /= 2;
//     }
//     // if word is complete
//     if (!this.isDeleting && this.txt === fullTxt) {
//         // make pause at end
//         typeSpeed = this.wait;
//         // set delete to true
//         this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         // move to next word
//         this.wordIndex++;
//         // Pause
//         typeSpeed = 500;
//     }
//     setTimeout(() => this.type(), typeSpeed);
// }


// ES6 class 
class Typing {
    constructor (txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // current index of words
        const current = this.wordIndex % this.words.length;
        // get full text of current words
        const fullTxt = this.words[current];
        // check if deleting
        if (this.isDeleting) {
            // Remove Char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        // insert text into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        // Initial Type Speed
        let typeSpeed = 300;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        // if word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // make pause at end
            typeSpeed = this.wait;
            // set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // move to next word
            this.wordIndex++;
            // Pause
            typeSpeed = 500;
        }
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);
// init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // init Typewriter
    new Typing(txtElement, words, wait);
}