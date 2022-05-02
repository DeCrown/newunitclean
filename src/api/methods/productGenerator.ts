import a from "src/bdsim/products/a.png";
import b from "src/bdsim/products/b.png";
import c from "src/bdsim/products/c.png";
import d from "src/bdsim/products/d.png";

const alf = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const images = [a, b, c, d];

const genWord = () => {
    let len = 1 + Math.round(Math.random() * 9);
    let res = '';
    for(let i = 0; i < len; i++) {
        res += alf[Math.floor(Math.random() * alf.length)];
    }
    return res;
}

const genPhrase = (maxlength: number = 6) => {
    let len = 1 + Math.round(Math.random() * maxlength - 1);
    let res = [];
    for(let i = 0; i < len; i++) {
        res.push(genWord());
    }
    return res.join(' ');
}

const genImages = () => {
    let len = 1 + Math.round(Math.random() * 4);
    let res = [];
    for(let i = 0; i < len; i++) {
        res.push(images[Math.floor(Math.random() * images.length)]);
    }
    return res;
}

const Generate = (buttons: boolean = false, promotion: boolean = false) => {
    let desc = [];
    let count = 1 + Math.round(Math.random() * 4);
    for (let i = 0; i < count; i++) {
        let textType = Math.round(Math.random());
        if (textType) {
            desc.push({
                header: genPhrase(),
                text: genPhrase()
            });
        }
        else {

            let len = 2 + Math.round(Math.random() * 2);
            let res = [];
            for(let i = 0; i < len; i++) {
                res.push(genWord());
            }

            desc.push({
                header: genPhrase(),
                text: res
            });
        }
    }

    /*return {
        id: Math.round(Math.random() * 1000),
        image: genImages(),
        title: genPhrase(),
        description: desc,
        price: Math.round(Math.random() * 10000),
        buttons: buttons,
        favourite: Boolean(Math.round(Math.random())),
        promotion: promotion
    }*/

    return {
        id: Math.round(Math.random() * 1000),
        image: genImages(),
        title: 'Название товара',
        description: [
            {header: 'Параметры', text: 'Описание продукта'},
            {header: 'Описание', text: 'Название товара'},
            {header: 'Объем', text: ['1,4 л', '2,4 л']}
        ],
        price: Math.round(Math.random() * 10000),
        buttons: buttons,
        favourite: Boolean(Math.round(Math.random())),
        promotion: promotion
    }
}

function Generator (buttons = false, promotion = false) {
    let len = Math.round(Math.random() * 10);
    let res = [];
    for(let i = 0; i < len; i++) {
        res.push(Generate(buttons, promotion));
    }
    return res;
}

export default Generator;