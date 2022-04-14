import React, { useState, useEffect } from "react";
// import './index.css';
//  import './ todocSS.css'; 

const getLocalData = () => {
    const lists = localStorage.getItem("myTodolist")
    if (lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
}

const Todo1 = () => {
    const [inputData, setInputData] = useState("");
    const [item, setItem] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, settoggleButton] = useState(false);




    //add the items function 
    const addItem = () => {
        if (!inputData) {
            alert("pls fill the data")
        }
        else if(inputData&& toggleButton){
            setItem(
                item.map((currElem)=>{
                    if(currElem.id===isEditItem){
                        return{...currElem,name:inputData};
                    }
                    return currElem;

                }

                )
            );
            setInputData([])
            setIsEditItem(null)
            settoggleButton(false);
        }

      
        else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            };
            setItem([...item, myNewInputData])
            setInputData("");

        }
    };
    //edit the item function 
    const editItem = (index) => {         ///find Method
        const item_todo_edited = item.find((currElem) => {
            return currElem.id === index;

        });
        setInputData(item_todo_edited.name)
        setIsEditItem(index)
        settoggleButton(true)
    }

    //how ton delete item
    const deleteItem = (index) => {
        const updatedItem = item.filter((currElem) => {

            return currElem.id !== index;
        }

        );
        setItem(updatedItem);

    };
    ///Remove all item

    const removeAll = () => {
        setItem([]);
    };

    useEffect(() => {
        localStorage.setItem("myTodolist", JSON.stringify(item))

    }, [item]

    )

    return (
        <>
            <div className="main_div">
                <article>

                <h2 class="display-1 text-center text-danger p-3 mb-2 bg-success.bg-gradient">Todo List</h2>
                <div className="child-div ">
                    <figure>
                        <div class="text-center">
                            <img src="./images/image.jpg" alt="todoLogo" className="rounded" />
                        </div>
                        <figcaption className="text-center fs-2 fw-bold font-monospace mx-auto text-primary">❤🤍💙💚 Add your List here✌</figcaption>
                    </figure>
                    <div className="addItem">
                        <input type="text" placeholder="Add item💕" className="form-control"
                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)} />
                        {toggleButton ? (<i className="far fa-edit  btn-outline-light " onClick={addItem}></i>
                        ) : (

                            <i className="fa fa-plus  btn-outline-light"
                                onClick={addItem}></i>
                        )}

                    </div>

                    <div className="showItems">
                        {item.map((currElem) => {
                            return (

                                <div className="eachItem" key={currElem.id}>
                                    <h3 className="text-primary"> {currElem.name}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-edit btn-outline-success"
                                            onClick={() => editItem(currElem.id)}></i>
                                        <i className="far fa-trash-alt btn btn-outline-light" onClick={() => deleteItem(currElem.id)}></i>

                                    </div>
                                </div>


                            )

                        }

                        )};



                    </div>
                    <button className="btn btn-outline-warning" data-sm-link-text="Remove all"
                        onClick={removeAll}>
                        <span>CHECK LIST</span></button>
                </div>
                </article>
 
            </div>




        </>
    )
}
export default Todo1;