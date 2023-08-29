'use strict';
import * as sound from './sound.js';

const CARROT_SIZE = 80;

export const ItemType = Object.freeze ({
    carrot : 'carrot',
    bug : 'bug',
});

export class Field {
    constructor(carrotCount, bugCount) {
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;
        this.field = document.querySelector('.game__field');
        this.fieldRect = this.field.getBoundingClientRect();
        // this.onClick = this.onClick.bind(this);
        //this.field.addEventListener('click',(event) => this.onClick(event));
        this.field.addEventListener('click', this.onClick);
    }

    init() {
        this.field.innerHTML = '';
        this._addItem('carrot',this.carrotCount,'./carrot/img/carrot.png');
        this._addItem('bug',this.bugCount,'./carrot/img/bug.png');
    }



    _addItem(className, count, imgPath) {
        const x1 = 0;
        const y1 = 0;
        const x2 = this.fieldRect.width - CARROT_SIZE;
        const y2 = this.fieldRect.height - CARROT_SIZE * 1.5;
        for(let i = 0; i < count; i++){
            const itme = document.createElement('img');
            itme.setAttribute('class',className);
            itme.setAttribute('src',imgPath);
            itme.style.position = 'absolute';
            const x = randomNumber(x1, x2);
            const y = randomNumber(y1, y2);
            itme.style.left = `${x}px`;
            itme.style.top = `${y}px`;
            this.field.appendChild(itme);
        }
    }

    setClickListener(onItemClick) {
        this.onItemClick = onItemClick;
    }

    onClick = (event) => {
        const target = event.target;
        if(target.matches('.carrot')) {
            target.remove();
            sound.playCarrot();
            this.onItemClick && this.onItemClick(ItemType.carrot);
        }else if(target.matches('.bug')) {
            this.onItemClick && this.onItemClick(ItemType.bug);
        }
    }
}

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}