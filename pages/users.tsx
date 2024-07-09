import Header from "@/components/Header";
import { useState } from "react";
import SortTable from "./SortTable";

type user = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Adress,
    phone: string,
    website: string,
    company: company
}
type company = {
    name: string,
    catchPhrase: string,
    bs: string

}
type Adress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: geo
}
type geo = {
    lat: string,
    lng: string
}

type userData = {
    data: user[]
}

const Users = ({ data }: userData) => {
    const [userInfo, setUserInfo] = useState([...data]);
    const [search, setSearch] = useState('');
    const [selectOption, setSelectOption] = useState('normal')

    const searchDara = (e: any) => {
        setSearch(e.target.value);
        const a = e.target.value;


        const x = data.filter(item => {
            return item.name.toLowerCase().includes(a.toLowerCase()) || item.username.toLowerCase().includes(a.toLowerCase())
        })
        if (a !== '') {
            setUserInfo(x);
        } else {
            setUserInfo(data);
        }

    }

    const sortTables = (values: any) => {

        if (values == 'username') {

            const ab = userInfo.sort((a: any, b: any) => {
                return a.username.localeCompare(b.username)
            })
            // console.log(data)
            setUserInfo([...ab])

        } else if (values == 'city') {
            // console.log("city")
            // console.log(data)
            const ab = userInfo.sort((a: any, b: any) => {
                return a.address.city.localeCompare(b.address.city)
            })
            setUserInfo([...ab])
        } else {
            //   console.log(values,data)
            setUserInfo([...data])
        }
        setSelectOption(values)
    }

    return (
        <>
            {/* <Header /> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="search"> <input type="text" placeholder="search by name & username" onChange={searchDara} /></div>
                    </div>

                </div>


                <SortTable sortbyUsernameCity={sortTables} opt={selectOption} />


                <div className="row showyuserinfo">

                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userInfo.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* {
                        userInfo.map((item, index) => {
                            return (
                                <div>

                                    <p>
                                        <b>Name :- </b> {item.name}  <br></br>
                                        <span>

                                            username: {item.username};
                                            email: {item.email};
                                            adress: street - {item.address.street},  ,
                                            phone: {item.phone},
                                            website: {item.website},
                                            company: company
                                        </span>
                                    </p>
                                    

                                </div>
                            )
                        })
                    } */}
                </div>
            </div>
        </>
    )
}
export default Users;
// 'https://jsonplaceholder.typicode.com/todos/1'

export async function getServerSideProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    return {
        props: {
            data
        }
    }
}


// export const getStaticProps = async () => {
//     // const { id } = context.params;
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const post = await res.json();
  
//     return {
//       props: {
//         post,
//       },
//     };
//   };