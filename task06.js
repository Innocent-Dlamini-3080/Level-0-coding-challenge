function largest(num1,num2,num3,...rest){
    let largestNum=0;
    if (num1> num2 && num1 > num3){
        largestNum = num1;
    }else if (num2 > num1 && num2 > num3){
        largestNum = num2;
    }else{
        largestNum = num3;
    }
    
// for unknown amount of inputs
    for (let i = 0; i < rest.length; i++){
    	if (rest[i] > largestNum){
    		largestNum = rest[i];
    		
    	}
    }
    return largestNum ;
   
}

largest(20,17,10,25,75,14,800);

