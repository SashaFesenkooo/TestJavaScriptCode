const horses = [
    'Secretariat',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Seabiccuit',
];

const refs = {
    startBtn: document.querySelector('.js-start-race'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector('.js-results-table > tbody'),
}

const promise = horses.map(run);
console.log(promise);

console.log(`Заезд начался, ставки не принимаются`);

run('Mango').then(x => console.log(x));
// console.log('Победил ${1}, финишировав за ${1} времени');
// console.log('Заезд окончен принимаются ставки');

function run(horse) {
    return new Promise((resolve, reject) => {
        const time = getRandomTime(2000, 3500);
        setTimeout(() => {
            resolve({horse, time})
        }, time);
    })
};

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

