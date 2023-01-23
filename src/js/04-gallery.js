// import BSN from 'bootstrap.native';

// const modal = new BSN.Modal('#subscription-modal');

// console.log(modal);

// modal.show();


// const date = Date.now();

// console.log(date);


// setTimeout(() => {
//     console.log(`date:`, date);
    
//     const date2 = Date.now();
//     console.log(date2);
//     console.log(date2 - date);
// }, 3000)


const timer = {
    start() {
        const startTime = Date.now();
       
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const timeComponents = getTimeComponents(deltaTime)
            console.log(timeComponents);
        }, 1000)
    }
}

timer.start()

function getTimeComponents(time) {
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return { hours, mins, secs}
}