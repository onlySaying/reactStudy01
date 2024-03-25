import {useState} from "react";

export const TODOList = () => {
    const [serialNum, setSerialNum] = useState(0);

    const [todoList, setTodoList] = useState({})

    const [addState, setAddState] = useState("");
    const [editState, setEditState] = useState("")

    const handleAddTODO = () => {
        setTodoList(prevState => {
                return {...prevState, [serialNum]: {content: addState, editState:false}}
            }
        );

        setSerialNum(prevState => prevState+1)
        setAddState("")
    }

    const handleShowEditView = key => {
        setTodoList(prevState => {
                return {...prevState, [key]: {content:addState, editMode:true}}
            }
        );
        setEditState(todoList[key].content)
    }

    const handleRemoveTODO = (key) => {
        const removedTODO = Object.entries(todoList)
            .filter(([curKey, _]) => curKey != key);

        setTodoList(Object.fromEntries(removedTODO));
    }

    const handleChangeTxt = e => {
        setAddState(e.target.value)
    }

    const handleEdit  = key => {
        setTodoList(prevState => {
                return {...prevState, [key]: {content: editState, editState:false}}
            }
        );

        setEditState("")
    }

    return <div style={{background: "orange", width: "500px", borderRadius: '10px', padding: "20px"}}>
        <h1>
            TODO List
        </h1>
        <ul>
            {
                Object.entries(todoList).map(([key, value]) =>
                    <li>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            {
                                !value.editMode ?
                                    value.content
                                    :
                                    <input value={editState} onChange={e => setEditState(e.target.value)}/>
                            }
                            <div>
                                {
                                    !value.editMode ?
                                    <button onClick={() => handleShowEditView(key)}>수정</button>
                                        :
                                    <button onClick={() => handleEdit(key)}>확인</button>

                                }
                                <button onClick={() => handleRemoveTODO(key)}>삭제</button>
                            </div>
                        </div>
                    </li>)
            }
        </ul>
        <div>
            <input onChange={handleChangeTxt} value={addState}/>
            <button onClick={handleAddTODO}> 추가</button>
        </div>
    </div>
};

export default TODOList;