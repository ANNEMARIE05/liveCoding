// creer la fonction 'count_number' qui aura un paramètre: nombre, de 
// type entier. la fonction devra retourner la somme de tous les chiffres 
// composant cet entier.. Si le paramètre n'est pas un entier, la fonction 
// retournera -1.


function count_number(nbr){
    if (typeof(nbr)==="number") {
        let result = 0;
        let t = []
        t.push(nbr)
        for(let i = 0; i>= t.length; i++){
            

        }

    } else {
        return -1
    }
}
console.log(count_number(123))
console.log(count_number(8390))
console.log(count_number('la'))