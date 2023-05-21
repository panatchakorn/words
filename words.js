let wordset = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม","ธัญยธรณ์",
"วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์","วันอาทิตย์"]
let word = "startword"
let wordMasked = "startwordMasked"
let expectedAnswer = "startanswer"
let txtanswer = document.getElementById("answerBox")
let labelfeedback = document.getElementById("feedback")
let labelscore = document.getElementById("score")
let score = 0

function load(){
    word = randomiseWordSelection()
    //document.writeln("word is " + word)
    wordMasked = maskWord(word)
    //document.writeln("wordMasked is " + workMasked)
    displayword(wordMasked)
    document.getElementById("answerBox").focus();
}

function next(){
    clear()
    load()
    
}

function clear(){
        labelfeedback.textContent = "";
        txtanswer.value = "";
    
}

function randomiseWordSelection(){
    let wordsetCount = wordset.length
    let max = wordsetCount - 1
    let min = 0
    let wordIndex = Math.round(Math.random() * (max - min) + min)
    if (wordIndex > max) {
        wordIndex = max
    } 
    else if(wordIndex < min){
        workIndex = min
    }
    return wordset[wordIndex]
}

function maskWord(wordToMask){
    let characterCount = wordToMask.length
    let max = characterCount - 1
    let min = 0
    let maskIndex = Math.round(Math.random() * (max - min) + min)
    
    setAnswer(word.charAt(maskIndex))
    let newWordMasked = ""

    // mask first letter
    if (maskIndex == min){
        newWordMasked = "_" + wordToMask.substring(1)
    }
    // mask last letter
    else if (maskIndex == max){
        newWordMasked = wordToMask.substring(0,max) + "_"
    }
    else {
       // newWordMasked = wordToMask.substring(0,maskIndex - 1) + "_" + wordToMask.substring(maskIndex)
        newWordMasked = wordToMask.substring(0,maskIndex) + "_" + wordToMask.substring(maskIndex + 1)
    }
    return newWordMasked

}

function setAnswer(character){
    expectedAnswer = character
}

function displayword(wordQuestion){
    //let word = "ม_ราคม"
    //document.writeln("What has gone missing?")
    //document.getElementById("q").ariaValueText = wordQuestion
    let labelq = document.getElementById("q")
    labelq.textContent = wordQuestion;
}

function validateAnswer(){
    let answer = txtanswer.value;
    //let labelfeedback = document.getElementById("feedback")
    if (answer.trim().length === 0){
        labelfeedback.textContent = "Blank answer. Realllllly "
    }
    else if(answer === expectedAnswer){
        labelfeedback.textContent = "Correct"
        score = score+1
        labelscore.textContent = score
    }
    else{
        labelfeedback.textContent = "Try again";
    }
   

}
load()
//displayword()