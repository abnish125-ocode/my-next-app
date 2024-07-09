  import Image from "next/image";
  import Link from "next/link";
  const Footer = ()=>{
     return (
        <>
          <div className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                    <div className="logo">
               <Link href="/">
                        {/* <image src="https://www.ocode.co/wp-content/uploads/2020/09/ocodelogo.png" alt=""/> */}
                        <Image
                            src="/whitelogo.png"
                            // src="https://www.ocode.co/wp-content/uploads/2020/09/ocodelogo.png"
                            alt="Vercel Logo"

                            width={200}
                            height={70}
                            priority
                        />
                    </Link>
               </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="links">
                        <h3 style={{alignItems:'center'}}> Links</h3>
                         <ul>
                            <li><Link href={'/'}> Home</Link></li>
                            <li><Link href={'/about'}>About</Link></li>
                            <li><Link href={'/fetchData'}>All Data</Link> </li>
                            <li><Link href={'/login'}>Login</Link></li>
                         </ul>
                        </div>
                         
                    </div> 
                    <div className="col-lg-4">
                    <div className="links">
                        <h3 style={{alignItems:'center'}}> Follow Us</h3>
                         <ul>
                            <li>LinkedIn</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                         </ul>
                        </div>
                    </div>
                </div>
            </div>
               
          </div>
        </>
     )
  }
  export default Footer;