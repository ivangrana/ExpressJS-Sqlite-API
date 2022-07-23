array = [1,3,5,7,9]

aux = ['first:','second:','third:','fourth:','fifth:']

function show(array,aux) { //function declaration
    for (let index = 0; index < array.length; index++) { //For loop 
        console.log(aux[index])
        console.log(array[index])
    } 
}

show(array,aux) //Function call
