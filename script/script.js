function myfunction(){
    let name={
        "username":"moonish",
        "Password":"moon2006"
    }
    let n=document.getElementById('a').value;
    let pass=document.getElementById('b').value;
if(name.username==n && name.Password==pass)
{
    console.log("Login Successfulluy");
}
else
{
   alert("invalid user or password");
 
}
    

}
function nmyfunction(){
    let x=parseInt(document.getElementById('l').value);
    let y=parseInt(document.getElementById('m').value);
    let z=x+y;
    console.log(z);
    
    



}
function newmyfunction(){
    let x=parseInt(document.getElementById('x').value);
    let y=parseInt(document.getElementById('y').value);
    let z=parseInt(document.getElementById('z').value);
    if(x>40 && y>40 && z>40)
        {
        console.log("True");
    }
    else{
        console.log("false");
    }
    
    

}
function calculate() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("operator").value;
    let result;

    if (op == "+") {
        result = n1 + n2;
    }
    else if (op == "-") {
        result = n1 - n2;
    }
    else if (op == "*") {
        result = n1 * n2;
    }
    else if (op == "/") {
        if (n2 === 0) {
            result = "Cannot divide by zero!";
        } else {
            result = n1 / n2;
        }
    }
    else {
        result = "Invalid operator!";
    }

    document.getElementById("result").textContent = result;
}
