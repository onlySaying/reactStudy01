import "./StudentList.css";

import {studentList} from "./Data.js"

export default function StudentList()
{

    const onUpdateChange = () =>
    {
        console.log("dddd");
    }
    
    return(
        <>
            <div className="ListAlign">
            <ul className="listColors">
            {       
                    studentList.map((stu,idx) =>
                    <div className="buttons">
                        
                        <div className="bgc" onClick={onUpdateChange}>
                            {stu.name}
                            <br/>
                            {stu.school}
                        </div>
                    </div>)
            }
            </ul>
            </div>
        </>
    )
}