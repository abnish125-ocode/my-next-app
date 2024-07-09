import Header from "@/components/Header"
import { useRouter } from "next/router";
import { useState } from "react";

type dataform = {
    name : string,
    email : '',
    password : ''
}

const SignUp = () => {

    const router = useRouter();
    const [formdata, setFormsData] = useState<any>({
        name: '',
        email:'',
        password: ''
    });
    const [error, seterroe] = useState(false);
    const changeValues = (e: any) => {
        setFormsData({ ...formdata, [e.target.id]: e.target.value })
    }
    const sendData = (e: any) => {
        e.preventDefault();
        if (formdata) {
        //     console.log(formdata)
        //     if (formdata.name == userInfo.username && formdata.password == userInfo.password) {
        //         localStorage.setItem('username', userInfo.username);
        //         router.push(`/profiles/${userInfo.username}`);

        //     } else {
        //         router.push('/login')
        //         seterroe(true)
        //     }
        if(formdata.name && formdata.email && formdata.password){
            localStorage.setItem('signup', {...formdata})
           router.push('/login')
        }else{
            router.push('/signup')
            seterroe(true)
        }
        
         }
        else {
           router.push('/signup')
             seterroe(true)
         }
    }

    return (
        <>
            {/* <Header /> */}
            <div className="form-section">
                <h2>SignUp your account</h2>
                <form>

                    <input type="text" onChange={changeValues} id="name" placeholder="Enter your full name" />

                    <input type="text" onChange={changeValues} id="email" placeholder="Enter your Email" />

                    <input type="Password" onChange={changeValues} id="password" placeholder="Enter your password" />

                    <button onClick={sendData}>Signup</button>


                    {
                        error ? <p className="showerroeMessage">*Invalid credentials</p> : ''
                    }

                </form>
            </div>
        </>
    )
}
export default SignUp;