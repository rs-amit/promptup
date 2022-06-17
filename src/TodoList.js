import React, { useState } from 'react';
import "./TodoList.css";
import { AiOutlineDelete } from 'react-icons/ai';//AiOutlineEdit
import { AiOutlineEdit } from 'react-icons/ai';

function TodoList() {

    const [todoList, setTodoList] = useState('');
    const [listedData, setListedData] = useState([]);
    const [checked, setChecked] = useState(false);
    const [edit, setEdit] = useState(false);
    const [UpdateText, setUpdateText] = useState("");
    const [currentIndex, setCurrentIndex] = useState();






    console.log(listedData)

    const FuncHandler = () => {
        const listObject = {
            checked: checked,
            text: todoList,
        }
        setListedData([...listedData, listObject])
        setTodoList("")
    }

    const SwitchingToUpdate = (index) => {
        setEdit(true)
        setCurrentIndex(index)
    }

    const DeleteHandler = (item, dataIndex) => {
        const UpdatedList = [...listedData]
        UpdatedList.filter((data, index) => dataIndex === index).map((item, index) => (item.checked = true))
        setListedData(UpdatedList)
        setChecked(false)
        console.log(UpdatedList)
    }

    const UpdateHandler = (item, dataIndex) => {
        const UpdatedList = [...listedData]
        UpdatedList.filter((data, index) => dataIndex === index).map((item, index) => (item.text = UpdateText))
        setListedData(UpdatedList)
        setEdit(false)
        setUpdateText("")
        console.log(UpdatedList)
    }

    return (
        <div className='TodoList'>
            <div className='TodoList_wrapper'>
                <div className='TodoList-title'>ToBO List</div>
                <div className='TodoList-input-area'>
                    <input
                        type='text'
                        onChange={(e) => setTodoList(e.target.value)}
                        value={todoList}
                    />
                    <button onClick={FuncHandler}>Add</button>
                </div>
                {
                    listedData ? (listedData.map((item, index) => (
                        <>
                            {
                                !edit ? (

                                    <div className='TodoList_listed_data' key={index}>
                                        <div className='TodoList_listed_data_wrap'>
                                            <input
                                                type="checkbox"
                                                defaultChecked={item.checked}
                                                onChange={(e) => setChecked(e.target.checked)}
                                            />

                                            <div className='listed_text'>
                                                {item.checked ? (
                                                    <s>{item.text}</s>
                                                ) : (
                                                    <span>{item.text}</span>
                                                )}
                                            </div>
                                        </div>
                                        {
                                            item.checked === false && (
                                                <div className='eventButtons'>
                                                    <AiOutlineEdit
                                                        color='#0066cc'
                                                        className='eventButtons'

                                                        onClick={() => SwitchingToUpdate(index)}

                                                    />

                                                    <AiOutlineDelete
                                                        color='#ff0000'
                                                        className='eventButtons'
                                                        onClick={() => DeleteHandler(item, index)}
                                                    />

                                                </div>
                                            )
                                        }

                                    </div>
                                ) : (
                                    index === currentIndex && (
                                        <div className='Update-container'>
                                            <input
                                                type="text"
                                                value={UpdateText}
                                                onChange={(e) => setUpdateText(e.target.value)}
                                            />
                                            <button onClick={() => UpdateHandler(item, index)}>Update</button>
                                        </div>
                                    )
                                )
                            }

                        </>
                    ))) : (
                        <div> You Haven't Listed Any Thing</div>
                    )
                }
            </div>
        </div>
    )
}

export default TodoList;