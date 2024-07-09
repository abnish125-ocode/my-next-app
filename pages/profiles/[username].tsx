import Header from "@/components/Header";
import { useRouter } from "next/router";
import Image from "next/image";




const UserPage = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <>
      {/* <Header /> */}
      <div className="userid">


        {/* <h1>Welcome, {username}!</h1> */}
        <div className="myinfo">
          <div className="profile-image">
            <Image src="/abnsih.jpg" alt="Abnish kumar" width={150} height={150} />
          </div>
          <div className="inform">
            <p>
              <b> Abnish kumar</b>(Software developer). <br></br>

            </p>
            <p>
              <b>Skills :- </b> React, Node, Mysql, DSA, Javascript, Java, Angular.
            </p>
          </div>
        </div>

      </div>

    </>

  );
};

export default UserPage;