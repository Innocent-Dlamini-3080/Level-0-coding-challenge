//Print common letters from two different strings

function findCommonLetters(string1,string2){
    let common = [];

    string1= string1.toLowerCase();   // converting the string to lowercase
    string2= string2.toLowerCase();  

    for (l1 of string1){             //l1 and l2 are elements
        for (l2 of string2){
            if (l1==l2){
                   common.push(l1);             
            }
        }
    }


    for (let i = 0; i < common.length; i++ ){
        for (let j = 0; j < common.length; j++){
            if (i !== j){
                if (common[i]=== common[j]){
                    common.splice(j,1);
                }
            }
        }
    }
    console.log("Common letters: "+ common);

}

findCommonLetters("hoeeuuse","comphhhuuter");
