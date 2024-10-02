import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Home.css"


const Home = () => {
    const navigation = useNavigate();

    const [data,setData] = useState({
       name:"",
       username:"",
       email:"",
       mobile:"",
       checkbox:false,
    });

    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]:  e.target.type === "checkbox" ? e.target.checked : e.target.value,
        });
    };

    const [errors, setErrors] = useState({
       name: "",
       username:"",
       email:"",
       mobile:"",
       checkbox:"",
    });

    const handleSubmit =(e) => {
        e.preventDefault();
        let errors = {};

        if(!data.name || data.name.trim() === ""){
            errors.name = "Name is required";
        }
        if(!data.username || data.username.trim() === ""){
            errors.username = "Username is required";
        }
        if(!data.email || data.email.trim() === ""){
            errors.email = "Email is required";
        }
        if(!data.mobile || data.mobile.trim() === ""){
            errors.mobile = "Mobile number is required";
        }
        if(!data.checkbox){
            errors.checkbox = "Checkbox is required";
        }

        setErrors(errors);

        if(Object.keys(errors).length > 0){
            return;
        }
        else{
            alert("Form is Submitted Sucessfully");
            localStorage.setItem("user", JSON.stringify(data));
            setData({
                name: "",
                username:"",
                email:"",
                mobile:"",
                checkbox:false,
            });

            navigation("/selection");
        }
    }
  return (
    <div>
      <main className="regform-container">
        <section className="regbg-container">
            <h1>Discover new things on Superapp</h1>
        </section>

        <section className="signup-section">
               <h2>Super app</h2>
               <p>Create your new account</p>

        <form className="userform"  onSubmit={handleSubmit}>

              <input type="text" name="name" placeholder="Name" value={data.name}  onChange={handleInput}/>
              <span className="error">{errors.name}</span>
              
              <input type="text" name="username" placeholder="Username" value={data.username} onChange={handleInput}/>
              <span className="error">{errors.username}</span>
              
              <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleInput}/>
              <span className="error">{errors.email}</span>
              
              <input type="tel" name="mobile" placeholder="Mobile" value={data.mobile} onChange={handleInput}/>
              <span className="error">{errors.mobile}</span>
              
              <div>
                 <input type="checkbox" id="checkbox" name="checkbox" onChange={handleInput} />
                 <label htmlFor="checkbox" className="checkpara">Share my registration data with Superapp</label>
              </div>
              <span className="error">{errors.checkbox}</span>
              
              <button type="submit" className="signup-btn">SIGN UP</button>
         </form>
        </section>
      </main>

    </div>
  )
}

export default Home