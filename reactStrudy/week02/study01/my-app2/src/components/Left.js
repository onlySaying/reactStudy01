import "./Left.css";

export default function Left()
{
    return (
        <>
            <div className="btn-container">
                <button type="button" class="btn btn-danger">삭제</button>
                <button type="button" class="btn btn-success">수정</button>
                <button type="button" class="btn btn-primary">추가</button>    
            </div>
            <br/>
            <div className="contextS">
                <div className="imgBox">
                    
                </div>
                <div className="nemeContext">이름 : {}</div>
                <select>
                    <option value="option1">옵션 1</option>
                    <option value="option2">옵션 2</option>
                </select>
            </div>
        </>
    )
}