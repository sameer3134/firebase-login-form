import React,{useState} from 'react';


const Signup = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    let name, value;
    const getUserdata=(e)=>{
       name= e.target.name;
       value= e.target.value;

        
       setUser({...user,[name]: value})
    }
    
        const postData= async(e)=>{
        e.preventDefault();
        const {email,password}= user;
        if (email && password) {
            const res =await fetch("https://react-763c4-default-rtdb.firebaseio.com/react.json",{
            method:"POST",
            headers:{
                "Content-Type":"application/JSON",
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        if (res) {
            setUser({
                email: "",
                password: "" 
            })
            alert("data stored successfully")
        }
        } else {
            alert("plz fill all the data")
        }
        
        
      
    }
  
  return (
    <>
     
     <div class="login-box">
<h2> Login Form</h2>
     <form method='POST'>
  <div className="user-box">
    
    <input type="email" value={user.email} onChange={getUserdata} placeholder=" Enter your email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="user-box">
    
    <input type="password" value={user.password} onChange={getUserdata} placeholder=" Enter password" className="form-control" name="password" id="exampleInputPassword1"/>
  </div>
  <a href='#' onClick={postData}>Submit</a>
  <footer style={{Color:"white"}}>basic login form for saving data in firebase</footer>
</form></div>



	  
    </>
  )
}

export default Signup