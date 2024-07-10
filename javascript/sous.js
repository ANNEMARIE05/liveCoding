// écrivez une fonction nommé "sous" qui prend en paramètre deux nombres a et b. 
// la fonction doit retourner la différence du plus grand nombre par le plus petit

function sous(nb1,nb2) {
   if(typeof(nb1)==="number" && typeof(nb2)==="number"){
        if(nb1>nb2){
            return nb1-nb2;
        }else{
            return nb2-nb1;
        }
   }else{
    return -1
   }
}
console.log(sous(2,5))
console.log(sous(-9,6))