import Header from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react"

type users = {
    username: string,
    password: string
}
const userInfo: users =

{
    username: "abnishkr_09",
    password: 'abnish@12345'
}


const Login = () => {
    const router = useRouter();
    const [formdata, setFormsData] = useState({
        name: '',
        password: ''
    });
    const [error, seterroe] = useState(false);
    const changeValues = (e: any) => {
        setFormsData({ ...formdata, [e.target.id]: e.target.value })
    }
    const sendData = (e: any) => {
        e.preventDefault();
        if (formdata) {
            console.log(formdata)
            if (formdata.name == userInfo.username && formdata.password == userInfo.password) {
                localStorage.setItem('username', userInfo.username);
                router.push(`/profiles/${userInfo.username}`);

            } else {
                router.push('/login')
                seterroe(true)
            }

        }
        else {
            router.push('/login')
            seterroe(true)
        }
    }
    return (
        <>
            {/* <Header /> */}
            <div className="form-section">
                <h2>Login your account</h2>
                <form>

                    <input type="text" onChange={changeValues} id="name" placeholder="Enter your username" />



                    <input type="Password" onChange={changeValues} id="password" placeholder="Enter your password" />

                    <button onClick={sendData}>Login</button>
                    <p>Don't have an account? <Link href={'/signup'}>Sign up</Link> </p>

                    {
                        error ? <p className="showerroeMessage">*Invalid credentials</p> : ''
                    }

                </form>
            </div>

        </>
    )
}

export default Login;