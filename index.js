const colors = require('colors')
const arg = process.argv.slice(2)
const nums = (a, b) => {
    const arr = []
    const reg = (a + b).search(/[A-Za-z]/)
    let count = 1
    if(!reg){
        return console.error(colors.red('Не число'))
    }
    for (let i = a; i < b; i++){
        if(i >= 2){
            let flag = true
            for(let j = 2; j < i; j++){
                if(i % j === 0){
                    flag = false
                    break
                }
            }
            if(flag){
                arr.push(i)
            }
        }
    }
    if(arr.length === 0){
        return console.error(colors.red('Нет простых чисел'))
    } else {
        return console.log(
            arr.map((el, i) => {
                if(count === 1){
                    count += 1
                    return colors.green(el)
                }
                if(count === 2){
                    count += 1
                    return colors.yellow(el)
                }
                if(count === 3){
                    count = 1
                    return colors.red(el)
                }
            }).join(' ')
        )
    }
}

nums(...arg)