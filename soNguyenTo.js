function checkSoNguyenTo(number){
    if (number<2){
        return 0;
    }
    let squareRoot1= +Math.sqrt(number);
    // alert("nube" +number);
    // alert("spr"+squareRoot1)
    for(i=2;i<=squareRoot1;i++){
        if (number%i==0){
            return 0;
            // alert("1"+"b2")
        }
    }
    return 1;
}

function NsoNguyenTo(){
    let number1=+document.getElementById("input1").value;
    let text="";
    let count=0; // dem cac so nguyen to
    let i=2; // tim cac so nguyen t bat dau tu 2
    while(count<number1){
        // alert(1+"b2");
        if (checkSoNguyenTo(i)){
            text=text + " ; "+ i;
            count=count+1;
            // alert(count+"2");
        }
        i++;
    }

    document.getElementById("output1").innerHTML= text.substring(2);
}