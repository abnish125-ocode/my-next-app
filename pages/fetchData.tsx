import React, { useEffect } from 'react'
import Header from "@/components/Header";
import { useState } from "react";
import Filter from "./filter";
import Footer from '@/components/Footer';



type User = {
    id: number;
    name: string;
    username: string;
    email: string;
}

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

type Props = {
    users: User[],
    todos: Todo[]
};

const arr = ["All", "Yes", "No"];

const FetchData = ({ users, todos }: Props) => {

    const [userData, setUserData] = useState(todos);

    const [todosData, setTodosData] = useState(users);
    const [filters, setFilters] = useState('All');

    const [shoIndex, setShowIndex] = useState(0);

    const [colors, setcolors] = useState(1);

    const [prevNext, setPrevnext] = useState({
        prev: 1,
        next: 6
    })

    const filterChangeValue = (value: string) => {
        setFilters(value)
    }

    useEffect(() => {
        const show = todos.slice(shoIndex, shoIndex + 10)
        setUserData([...show])
        const docs = document.getElementById(`page-${colors}`);
        docs?.classList.add('red');
    }, [shoIndex])

    const handleClick = (index: number) => {
        setShowIndex((index - 1) * (10));
        const docss = document.getElementById(`page-${colors}`);
        docss?.classList.remove('red');
        const docs = document.getElementById(`page-${index}`);
        docs?.classList.add('red');
        setcolors(index)
    }

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = prevNext.prev; i <= prevNext.next; i++) {
            pageNumbers.push(
                <button key={i} id={`page-${i}`} onClick={() => handleClick(i)}>
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };
    const cometoPreviousPage = () => {
        if (prevNext.prev !== 1) {
            setPrevnext((previous: any) => {
                const a = {
                    prev: previous.prev - 1,
                    next: previous.next - 1
                }
                handleClick(a.prev)
                return a
            })
        }
    }
    const gotoNextPage = () => {
        if (todos.length / 10 > prevNext.next) {

            setPrevnext((previous: any) => {
                const a = {
                    prev: previous.prev + 1,
                    next: previous.next + 1
                }
                handleClick(a.next)
                return a
            })
        }
    }
    return (
        <>
            {/* <Header /> */}
            <div className="filter-sec">
            <Filter onFilterChange={filterChangeValue} arr={arr} />
            </div>

          

            <div className="fetch-data">




                <table className="table-items">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((todo, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        {/* {
                                            shoIndex > index ? 
                                        } */}
                                        {
                                            todo.completed && (filters == 'All' || filters == 'Yes') ? <tr key={todo.id} className="yesbank">

                                                <td>{todo.id}</td>
                                                <td className="titles">{todo.title}</td>
                                                <td>Yes</td>
                                            </tr> : !todo.completed && (filters == 'All' || filters == 'No') ? <tr key={todo.id} className="nobank">

                                                <td>{todo.id}</td>
                                                <td className="titles">{todo.title}</td>
                                                <td>No</td>
                                            </tr> : ''
                                        }
                                    </React.Fragment>

                                )
                            })
                        }

                    </tbody>
                </table>



            </div>
            <div className="nextPrev">
                <div className="prev">
                    <button onClick={cometoPreviousPage}>Prev</button>
                </div>
                {renderPageNumbers()}
                <div className="next">
                    <button onClick={gotoNextPage} >Next</button>
                </div>



            </div>
            {/* <Footer /> */}
        </>
    )
}
export default FetchData;

export async function getServerSideProps() {

    async function fetchDatasfromApi(url: string) {
        const response = await fetch(url);

        const data: Todo[] = await response.json();
        return data;
    }
    const a = "https://jsonplaceholder.typicode.com/users";
    const b = "https://jsonplaceholder.typicode.com/todos/";
    const [users, todos] = await Promise.all([fetchDatasfromApi(a), fetchDatasfromApi(b)]);

    return {
        props: {
            users,
            todos,
        },
    };
}