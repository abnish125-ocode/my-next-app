import { useState } from "react";

const TodoList = () => {
    const [items, setItems] = useState('');
    const changeTodoList = (e: any) => {
        setItems(e.target.value);
    }
    const setItemsdata = () => {

    }
    return (
        <>
            <input type="text" placeholder="Todo Items" onChange={changeTodoList} />
            <button onClick={setItemsdata} >Add Items</button>
        </>
    )
}
export default TodoList;