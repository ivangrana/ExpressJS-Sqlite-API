var word = "sherlock",word2 = "herslock"
word = word.split("")
word2 = word2.split("")

function checker(word,word2){
    count = 0
    for(k=0;k < word2.length;k++){
        for(i=0;i < word.length;i++){
            if(word[i] == word2[k]){
                count++
                break
            }
        }
    }
    return count
}

if(word.length == word2.length){
    if(checker(word, word2) == word.length){
        console.log("'%s' and '%s' are anagrams",word.toString(),word2.toString())
    }
    else{
        console.log("'%s' and '%s' are not anagrams",word.toString(),word2.toString())
    }
}
else{
    console.log("'%s' and '%s' are not anagrams",word.toString(),word2.toString())
}   
