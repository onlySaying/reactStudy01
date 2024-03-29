
const InfoRow = ({infoName, content}) => {
    return <div className={"info-row"}>
        <h2>{infoName}</h2>
        <input value={content}/>
    </div>
}

export const StudentEdit = ({detailInfo={}}) => {
    return <div className={"student-detail"}>
        <div className={"header"}>
            <div className={"image"}>
            </div>
            <div className={"info"}>
                <InfoRow infoName={"이름"} content={detailInfo?.name} />
                <InfoRow infoName={"소속"} content={detailInfo?.school} />
                <InfoRow infoName={"학년"} content={detailInfo?.grade} />
                <InfoRow infoName={"학번"} content={detailInfo?.schoolNum} />
            </div>
        </div>
        <div className={"body"}>
            {
                detailInfo.scores!=null &&
                detailInfo.scores.map(score => (
                    <InfoRow infoName={score.semester}  content={score.score}/>
                ))
            }
        </div>
    </div>
};

export default StudentEdit;

