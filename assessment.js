const inputString = document.getElementById("inputStr")
const submit = document.getElementById('submit')
const result = document.getElementById('result')

submit.addEventListener('click', firstNoneRepeating);


function firstNoneRepeating() {
    let str = inputString.value
    str = str.toLowerCase()
    console.log(str)
    //edge cases
    if (str.length === 0) return ''
    if (str.length === 1) return str

    //use an object to count the frequency of characters in input string
    let frequency = {}
    //add each char to frequency 
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (!frequency[char]) {
            frequency[char] = 1
        } else {
            frequency[char]++
        }
    }
    console.log('frequency ',frequency)
    let finalStr = ''
    let secondHalf = ''
    //go over freqency and print out the final string
    for (let key in frequency) {
        if (frequency[key] === 1) {
            finalStr += key
        } else {
            for (let i = 0; i < frequency[key]; i++) {
                secondHalf += key
            }
        }
    }
   let final = finalStr + secondHalf
   result.textContent = final
}

// console.log(firstNoneRepeating(inputString))