import react from 'react'
import { useState, useEffect } from 'react'


const my = ["behnam", "ali"]

const List = () => {

    const [item, setItem] = useState();
    const [itemList, setItemList] = useState(my);

    console.log(itemList)
    const addItems = () => {


        setItemList(itemList => ([...itemList, item]));

        console.log(itemList)
    }
    const remove=(id) =>
    {
        alert(id)
        setItemList(itemList => ([...itemList.filter( x=> x!=id)]))
    }


    return (
        <div>
            <div>

                <input type="text" onChange={(e) => setItem(e.target.value)} />
                <input type="button" onClick={addItems} value="add" />


            </div>
            <br />
            <div>
                {itemList.map((res) =>(<div style={{backgroundColor: "lightblue",fontSize:"30px",border: "solid",margin: "10px"}}>{res}<input type="button" value="remove" style={{height: "50px"}}  onClick={()=>remove(res)}/></div>) ) }
            </div>
        </div>
    );
}
export default List
