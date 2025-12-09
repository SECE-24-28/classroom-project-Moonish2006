/*import validate from "./validate";
export default function App() {
  return (
    <>
      <form action="">
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label htmlFor="Username">Username:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  placeholder="Enter your username"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="Enter your Password "
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="remember" id="remember" value="remember"/>
                <label htmlFor="remember">Remember me?</label>
              </td>
              <td>
                <input type="button" value="Submit"  onClick={validate}/>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}*/
import './styles.css';
import Navbar from './components/nav';
import Hero from './components/hero';
import Testimonial from './components/test';
import Footer from './components/footer';



/*export default function App() {
return (
<div className="min-h-screen flex flex-col">
<Navbar />
<Hero />
<Testimonial />
<Footer />
</div>
);
}*/
import { useState,useEffect } from "react";
export default function App(){
  const [myname,setname]=useState("");

  useEffect(()=>{
    console.log("effect works"); 
  },[myname]);

  const bikes = new Map()

  bikes.set("shine","honda")
  bikes.set("apache","tvs")
  console.log(bikes.get("apache"))
  
  return(
    <>
    <input
    type="text"
    value={myname}
    placeholder="enter your name"
    onChange={(event)=>setname(event.target.value)}
    />
    <p>The Value is:{myname}</p>

      
    </>
  );
}