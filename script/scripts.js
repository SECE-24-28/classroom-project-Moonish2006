function myfunction()
{
    let n=parseInt(document.getElementById('name').value);
     
     if(n==100){
           console.log("A GRADE")
     }
     else if(n>=90){
        console.log("B GRADE")
     }
     else if(n>=80){
        console.log(" C GRADE")
     }
     else if(n>=60){
        console.log("D GRADE")
     }
     
     else{
        console.log("fail")
    }
    for(let i=10;i<=20;i++){
        console.log("The value is"+i);
    }
       
    for(let j=1;j<=100;j++){
            if(j%2==0){
                console.log(j);
            }
        }

    
}