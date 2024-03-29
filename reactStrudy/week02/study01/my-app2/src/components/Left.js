import "./Left.css";

export default function Left()
{
    return (
        <>
            <div className="classAlign">
            <div className="btn-container">
                <button type="button" class="btn btn-danger">삭제</button>
                <button type="button" class="btn btn-success">수정</button>
                <button type="button" class="btn btn-primary">추가</button>    
            </div>
            <br/>
            <div className="contextS">
                <div className="imgBox">
                    
                </div>
            </div>
            <div className="nemeContext">이름 : {}</div>
            <select className="bottomMargin">
                    <option value="option1">금오공과대학교</option>
                    <option value="option2">경북대학교</option>
                    <option value="option3">영남대학교</option>
                    <option value="option4">계명대학교</option>
                    <option value="option5">서울대학교</option>
            </select>
            <div className="bottomMargin">학년 : {}</div>
            <div className="bottomMargin">학번 : {} </div>
            </div>
        </>
    )
}