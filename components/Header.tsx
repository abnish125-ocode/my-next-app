import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// type stx={
//     src:string
// }

const Header = () => {
    const router = useRouter();
    // const x = localStorage.getItem('username');
    const logoutusrs = () => {
        alert("logout your account")
        // if(localStorage.getItem(''))
        //  localStorage.removeItem('username');
        router.push('/')
    }
    return (
        <>
            {/* <h1>Header section</h1> */}
            <div className="header-section">
                <div className="logo">
                    <Link href="/">
                        {/* <image src="https://www.ocode.co/wp-content/uploads/2020/09/ocodelogo.png" alt=""/> */}
                        <Image
                            src="/ocodelogo.png"
                            // src="https://www.ocode.co/wp-content/uploads/2020/09/ocodelogo.png"
                            alt="Vercel Logo"

                            width={100}
                            height={24}
                            priority
                        />
                    </Link>
                </div>
                <div className="menu">
                    <ul className="menu-list">
                        <li><Link href={"/"}>Home</Link> </li>
                        <li><Link href={"/about"}>About</Link> </li>
                        <li><Link href={"/users"}>Users</Link> </li>
                        <li><Link href={"/fetchData"}>All Data</Link> </li>
                        {
                            <li><Link href={"/login"}>Login</Link> </li>

                            //   ? <li onClick={logoutusrs}>Logout </li> :
                        }
                        {/* <li><Link href={"/login"}>Login</Link> </li> */}

                    </ul>
                </div>
            </div>


        </>
    )
}

export default Header;