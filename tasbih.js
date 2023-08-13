const subhanAllahValue = document.getElementById('increment-value')
const subhanAllahValue1 = document.getElementById('decrement-value')
const AlhamdulillahValue = document.getElementById('2ndincrement-value')
const AlhamdulillahValue1 = document.getElementById('2nddecrement-value')
const AllahuakberValue = document.getElementById('3rdincrement-value')
const AllahuakberValue1 = document.getElementById('3rddecrement-value')

let initialValueForFirst = 0
let initialValueForSecond = 0
let initialValueForThird = 0

subhanAllahValue.addEventListener('click', function () {
    initialValueForFirst += 1
    // console.log(initialValueForFirst)
    count1.innerText = initialValueForFirst
})
AlhamdulillahValue.addEventListener('click', function () {
    initialValueForSecond += 1
    // console.log(initialValueForSecond)
    count2.innerText = initialValueForSecond
})
AllahuakberValue.addEventListener('click', function () {
    initialValueForThird += 1
    // console.log(initialValueForThird)
    count3.innerText = initialValueForThird
})


subhanAllahValue1.addEventListener('click', function () {
    if (initialValueForFirst === 0) {
        return alert("You can't provide negative value")
    }
    else {
        initialValueForFirst -= 1
        // console.log(initialValueForFirst)
        count1.innerText = initialValueForFirst
    }
})


AlhamdulillahValue.addEventListener('click', function () {
    initialValueForSecond += 1
    // console.log(initialValueForSecond)
    count2.innerText = initialValueForSecond
})

AlhamdulillahValue1.addEventListener('click', function () {
    if (initialValueForSecond === 0) {
        return alert("You can't provide negative value")
    }
    else {
        initialValueForSecond -= 1
        // console.log(initialValueForFirst)
        count2.innerText = initialValueForSecond
    }
})


AllahuakberValue.addEventListener('click', function () {
    initialValueForThird += 1
    // console.log(initialValueForThird)
    count3.innerText = initialValueForThird
})
AllahuakberValue1.addEventListener('click', function () {
    if (initialValueForThird === 0) {
        return alert("You can't provide negative value")
    }
    else {
        initialValueForThird -= 1
        // console.log(initialValueForFirst)
        count3.innerText = initialValueForThird
    }
})

const resetall = document.getElementById('reset-all')
resetall.addEventListener('click', function(){
    count1.innerText=0
    count2.innerText=0
    count3.innerText=0
    

})


