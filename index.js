//1.
// Record 1
// Record 5
// Record 6
// Record 2
// Record 4
// Record 3
//2.
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};

const emitter = new MyEmitter();

const timer = (date) => {
    const conver = date.split('-').reverse()
    conver[1] -=  1
    const dateConver = new Date(...conver)
    return time = setInterval(() => {
        const nowDate = new Date()
        const s = dateConver - nowDate
        const hours = parseInt(s/3600000)
        const day = parseInt(hours/24)
        const month = parseInt(day/30)
        const year = parseInt(month/12)
        if(hours <= 0){
            clearInterval(time)
            return console.log('timeout')
        }
        if(day <= 0){
            console.log('day timeout')
        }
        if(month <= 0){
            console.log('month timeout')
        }
        if(year <= 0){
            console.log('year timeout')
        }
        console.log(year, month, day, hours)
    }, 1000)
}

emitter.on('clock', timer)
emitter.emit('clock', '10-21-1-2022')

