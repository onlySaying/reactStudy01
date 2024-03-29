import "./css/ListCard.css"
export const ListCard = ({studentInfo, onclick}) => {
    return <div className={"listcard-container"} onClick={onclick}>
        <div className={"image-container"}></div>
        <div className={"student-container"}>
            <div>
                <h2>{studentInfo.name}</h2>
            </div>
            <div>
                <h3>{studentInfo.school}</h3>
            </div>
        </div>
    </div>
}

export default ListCard;