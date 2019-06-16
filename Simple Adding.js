function simpleAdding(num){
    if(num > 0 && num <= 1){
        return 1;
    }
    else{
        return num + simpleAdding(num-1);
    }
}
// zelfde als firstFactorial opdracht alleen nu is het plus ipv keer