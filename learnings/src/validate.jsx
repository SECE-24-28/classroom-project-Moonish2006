export default async function validate(){
  let credentials={
    "username":"Admin",
    "password":"12345"
  }
let userdata={
    "username":document.getElementById('username').value,
    "password":document.getElementById('password').value,
    "rememberme":document.getElementById('remember').checked
}
//if(credentials.username == userdata.username && credentials.password == userdata.password){
    //alert("login sucessfull")
//}
//else{
    //alert("re-check the credentials")
//}
let userpromise = new Promise(
    function(resolve,reject){
        if(credentials.username == userdata.username && credentials.password == userdata.password){
            resolve("login sucessfull")
         }
         else{
            reject('login failed')
         }
        });
      /* userpromise
       .then(
            function(sucessmessage){
                alert(sucessmessage);
            }
         )
         .catch(
            function(failedmessage){
                alert(failedmessage);
            }
         ); */
         try{
            let sucessmessage= await userpromise;
            alert(sucessmessage);
         }
        catch(failedmessage){
            alert(failedmessage);
        }

        if(userdata.rememberme){
            localStorage.setItem('username',userdata.username);
            localStorage.setItem('password',userdata.password);
            console.log("password stored locally")
        }
        else{
            sessionStorage.setItem('username',userdata.username);
             sessionStorage.setItem('password',userdata.password);
             console.log('password stored session')
        }
        

        }

           
        
