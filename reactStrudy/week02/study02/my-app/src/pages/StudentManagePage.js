import "./css/StudentManagePage.css"
import ListCard from "../components/ListCard";
import {useEffect, useState} from "react";
import StudentDetail from "../components/StudentDetail";
import StudentEdit from "../components/StudentEdit";
const fetchStudnetList = [
    {id : 1, name: "홍길동", school:"금오공과대학교"},
    {id : 5, name: "김길동", school:"경북대학교"},
    {id : 7, name: "박길동", school:"경북대학교"},
    {id : 8, name: "이길동", school:"금오공과대학교"},
    {id : 10, name: "정길동", school:"계명대학교"},
    {id : 11, name: "방길동", school:"계명대학교"},
    {id : 12, name: "성길동", school:"금오공과대학교"},
    {id : 20, name: "장길동", school:"서울대학교"},
    {id : 22, name: "마길동", school:"금오공과대학교"},
    {id : 23, name: "황길동", school:"영남대학교"},
]

const fetchStudentDetail = {
    id : 5,
    name : "김길동",
    school : {id:2, name:"경북대학교"},
    grade : "2학년",
    schoolNum : "20201010",
    scores : [
        {semester:"1학년 1학기", score:3.5},
        {semester:"1학년 2학기", score:3.2},
        {semester:"2학년 1학기", score:4.1},
        {semester:"2학년 2학기", score:4.3},
        {semester:"3학년 1학기", score:4.5},
        {semester:"3학년 2학기", score:4.5},
        {semester:"4학년 1학기", score:3.5},
        {semester:"4학년 2학기", score:2.5},
    ]
}

const updateRequestBody = {
    id : 5,
    name : "김길동",
    schoolId : 5,
    grade : "2학년",
    schoolNum : "20201010",
    scores : [
        {semester:"1학년 1학기", score:3.5},
        {semester:"1학년 2학기", score:3.2},
        {semester:"2학년 1학기", score:4.1},
        {semester:"2학년 2학기", score:4.3},
        {semester:"3학년 1학기", score:4.5},
        {semester:"3학년 2학기", score:4.5},
        {semester:"4학년 1학기", score:3.5},
        {semester:"4학년 2학기", score:2.5},
    ]
}

const fetchSchoolList = [
    {id:1, name:"금오공과대학교"},
    {id:2, name:"경북대학교"},
    {id:3, name:"계명대학교"},
    {id:4, name:"서울대학교"},
]

export const StudentManagePage = () => {
    const [studentList, setStudentList] = useState([]);
    const [studentDetail, setStudentDetail] = useState({});
    const [isEditMode, setIsEditMode] = useState(false);
    const [schoolList, setSchoolList] = useState([]);

    const [studentRequest, setStudentRequest] = useState({});

    useEffect(() => {
        //서버와의 통신으로 받아온 데이터들 state로 저장

        setStudentList(fetchStudnetList);
        setSchoolList(fetchSchoolList);
    }, []);

    const checkSelectedStudent = () => {
        if(studentDetail.id==null){
            alert("현재 선택된 학생이 없습니다.")
            return false;
        }
        return true;
    }
    const handleClickRemoveBtn = () => {
        if(!checkSelectedStudent()){
            return;
        }

        const id = studentDetail.id;
        // 서버에게 아이디값을 보내서 삭제 요청을 보낸다.

        // 서버에게 새로운 학생 목록을 요청해서 받아온다.
        setStudentList(fetchStudnetList);

        setStudentDetail({})
    }

    const handleListClick = (id) => {
        // 서버랑 통신하는 로직
        setStudentDetail(fetchStudentDetail)
    }

    const handleClickUpdateBtn = () => {
        if(!checkSelectedStudent()){
            return;
        }

        if(!isEditMode){
            setIsEditMode(prevState => !prevState);
            setStudentRequest({
                ...studentDetail,
                schoolId : studentDetail.school.id
            })
        }else{
            // studentRequest 상태를 서버에다가 수정 요청으로 보낸다.

            setIsEditMode(prevState => !prevState);
            setStudentList(fetchStudnetList)
            setStudentDetail(fetchStudentDetail)
        }
    }

    return <div className={"container"}>
        <div className={"detail-container"}>
            <div className={"btn-container"}>
                <button className={"btn btn-remove"} onClick={handleClickRemoveBtn}>삭제</button>
                <button className={"btn btn-update"} onClick={handleClickUpdateBtn}>수정</button>
                <button className={"btn btn-add"}>추가</button>
            </div>
            <StudentDetail detailInfo={studentDetail} editMode={isEditMode} schoolList={schoolList} setStudentRequest={setStudentRequest}/>
        </div>
        <div className={"list-container"}>
            {
                studentList.map(student => {
                    return <ListCard studentInfo={student} onclick={() => handleListClick(student.id)} />
                })
            }
        </div>
    </div>
}

export default StudentManagePage;
