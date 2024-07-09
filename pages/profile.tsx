import Header from "@/components/Header";
import Image from "next/image";





const Profile = ()=>{

    const users= localStorage.getItem('username');

    return(
        <>
        {/* <Header /> */}
        <div className="profile">
            
        <h2>Hi-- {users}</h2>
          <Image src="/abnsih.jpg" alt="Abnish kumar" />
        </div>
       
        </>
    )
  }

  export default Profile;