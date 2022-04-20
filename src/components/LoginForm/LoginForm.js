// import React,{useState} from 'react'
// import './Login.scss'
// import validateCredentials from './validateCredentials';
// // import { axioss } from '../axios';

// function Login() {
//     const [click, setclick] = useState(false);
//     const [Name, setName] = useState("");
//     const [email,setemail]=useState("");
//     const [password,setpassword]=useState("");
//     const [confirmpassword, setconfirmpassword] = useState("");
//     const [error,seterror]= useState([])

//     const submitlogin = (e)=>{
//         e.preventDefault();
//         const newuser ={email:email,password:password}
//         // axioss({method:'post',url:'/login',data:newuser}).then((res)=>{
//         //     console.log(res);
//         // }).catch((err)=>{console.log(err);})

//         setemail("");
//         setpassword("");
//     }

//     // new user registration
//     const register=(e)=>{
//         e.preventDefault();
//         const data = validateCredentials(email,Name,password,confirmpassword);
//         seterror(data);
//         if(!error){
//             const newentry={email:email,password:password,cname:Name}
//             // axioss({method:'post',url:'/signup',data:newentry}).then((res)=>{
//             //     console.log(res);
//             // }).catch((err)=>{
//             //     console.log(err);
//             // })
//         }
//         setpassword('');
//         setconfirmpassword("");
//         setName('');
//         setemail("");
//     }

//     // function for change signup and signin page
//     const handleclick=()=>{
//         setclick(!click);
//     }
//     const handlesignin=()=>{
//         setclick(false)
//     }

//     return (
//         <div className='login'>
//             <div className={click?'container':'container onclick'}>
//                 <div className="left">
//                     <div className="left-signup">
//                         <h1>RoomMate</h1>
//                         <h3>Please create an account using your RPI email!</h3>
//                     </div>
//                 </div>
//                 <div className="right">
//                     <div className="right-signup">
//                         <h2>CREATE AN ACCOUNT</h2>
//                         <div className="form-panel">
//                             <form action=""className='form' onSubmit={register}>
//                                 <div>
//                                     <input type="text" placeholder='Full Name' value={Name} onChange={(e)=>setName(e.target.value)}/>
//                                     {error.name && <p style={{color:"red",textAlign:'initial',fontSize:'12px'}}>{error.name}</p>}
//                                 </div>
//                                 <div>
//                                     <input type="text" placeholder='Email Address' value={email} onChange={(e)=>setemail(e.target.value)}/>
//                                     {error.email && <p style={{color:"red",textAlign:'initial',fontSize:'12px'}}>{error.email}</p>}
//                                 </div>
//                                 <div>
//                                     <input type="" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
//                                     {error.password && <p style={{color:"red",textAlign:'initial',fontSize:'12px'}}>{error.password}</p>}
//                                 </div>
//                                 <div>
//                                     <input type="" placeholder="Confirm Password" value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)}/>
//                                     {error.confirmpassword && <p style={{color:"red",textAlign:'initial' ,fontSize:'12px'}}>{error.confirmpassword}</p>}
//                                 </div>
//                                 <button class="btn">SIGN UP</button>
//                                 <h4><span>OR</span></h4>
//                                 <div className="icons">
//                                     <div className='icon'>
//                                         <i class="fab fa-google"></i>
//                                     </div>
//                                     <div className='icon'>
//                                         <i class="fab fa-facebook-f"></i>
//                                     </div>
//                                     <div className='icon'>
//                                         <i class="fab fa-twitter"></i>
//                                     </div>
//                                 </div>
//                                 <p onClick={handlesignin}>already have a account?</p>
//                                 <h3 onClick={handleclick}>SIGN IN</h3>
//                             </form>
//                         </div>
//                     </div>
//                     <div className="right-signin">
//                         <h1>LOGIN YOUR ACCOUNT</h1>
//                         <div className="form-panel">
//                             <form action="" className='form' onSubmit={submitlogin}>
//                                 <input type="text" placeholder='Email Address' value={email} onChange={(e)=>setemail(e.target.value)}/>
//                                 {error.email && <p>{error.email}</p>}
//                                 <input type="password" placeholder="Password" secureTextEntry={true} value={password} onChange={(e)=>setpassword(e.target.value)} />
//                                 <h5 >FORGET PASSWORD?</h5>
//                                 <button class="btn" type='submit'>SIGN IN</button>
//                                 <h4><span>OR</span></h4>
//                                 <div className="icons">
//                                     <div className='icon'>
//                                         <i class="fab fa-google"></i>
//                                     </div>
//                                     <div className='icon'>
//                                         <i class="fab fa-facebook-f"></i>
//                                     </div>
//                                     <div className='icon'>
//                                         <i class="fab fa-twitter"></i>
//                                     </div>
//                                 </div>
//                                 <p >already have a account?</p>
//                                 <h3 onClick={handleclick}>SIGN UP</h3>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login

import React, { useState } from 'react';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? ( <div className="error">{error}</div> ) : ""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        onChange={e => setDetails({...details, name: e.target.value})} 
                        value={details.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        onChange={e => setDetails({...details, email: e.target.value})}
                        value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        onChange={e => setDetails({...details, password: e.target.value})}
                        value={details.password} />
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
}

export default LoginForm;