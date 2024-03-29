import "./css/StudentDetaiil.css"
import {useState} from "react";

const InfoRow = ({infoName, content}) => {
    return <div className={"info-row"}>
        <h2>{infoName}</h2>
        <h2>{content}</h2>
    </div>
}

const EditRow = ({field, infoName, content, select = false, schoolList, setStudentRequest}) => {
    const [currentInput, setCurrentInput] = useState(content);
    const handleInputChange = e => {
        setCurrentInput(e.target.value)
        setStudentRequest(prevState => ({
            ...prevState,
            [field] : e.target.value
        }))
    }

    return <div className={"info-row"}>
        <h2>{infoName}</h2>
        {
            select ?
                <select value={currentInput} onChange={e => setCurrentInput(e.target.value)}>
                    {
                        schoolList?.map(school => (
                            <option value={school.id}>{school.name}</option>
                        ))
                    }
                </select>
                :
                <input value={currentInput} onChange={handleInputChange}/>
        }
    </div>
}

const EditScoreRow = ({infoName, content, setStudentRequest}) => {
    const [currentInput, setCurrentInput] = useState(content);

    const handleInputChange = e => {
        // 배열에서 infoName이름을 가진 객체를 빼고 가져온다.
        // infoName을 가진 객체를 만들어서 배열에 넣어준다.

        setCurrentInput(e.target.value)
        setStudentRequest(prevState => ({
            ...prevState,
            scores : [
                ...prevState.scores.filter(s => s.semester!=infoName),
                {semester:infoName, score:e.target.value}
            ]
        }))
    }


    return <div className={"info-row"}>
        <h2>{infoName}</h2>
        <input value={currentInput} onChange={handleInputChange}/>
    </div>
}

export const StudentDetail = ({detailInfo, editMode = false, schoolList, setStudentRequest}) => {
    return <div className={"student-detail"}>
        <div className={"header"}>
            <div className={"image"}>
            </div>
            <div className={"info"}>
                {
                    editMode ?
                        <>
                            <EditRow infoName={"이름"} field={"name"}  content={detailInfo?.name} setStudentRequest={setStudentRequest}/>
                            <EditRow infoName={"소속"} field={"schoolId"} content={detailInfo?.school?.id} select schoolList={schoolList} setStudentRequest={setStudentRequest}/>
                            <EditRow infoName={"학년"} field={"grade"} content={detailInfo?.grade} setStudentRequest={setStudentRequest}/>
                            <EditRow infoName={"학번"} field={"schoolNum"} content={detailInfo?.schoolNum} setStudentRequest={setStudentRequest}/>
                        </>
                        :
                        <>
                            <InfoRow infoName={"이름"} content={detailInfo?.name} />
                            <InfoRow infoName={"소속"} content={detailInfo?.school?.name}/>
                            <InfoRow infoName={"학년"} content={detailInfo?.grade}/>
                            <InfoRow infoName={"학번"} content={detailInfo?.schoolNum}/>
                        </>
                }
            </div>
        </div>
        <div className={"body"}>
            {
                detailInfo.scores != null &&
                detailInfo?.scores?.map(score => (
                    editMode ?
                        <EditScoreRow infoName={score.semester} content={score.score} setStudentRequest={setStudentRequest}/>
                        :
                        <InfoRow infoName={score.semester} content={score.score}/>
                ))
            }
        </div>
    </div>
};

export default StudentDetail;