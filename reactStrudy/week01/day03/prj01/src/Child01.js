import {useSelector} from "react-redux";

function Child01() {
    let 체중 = useSelector( (state)=>{return state.체중} )

    return (<div>
        <h2>Child 01</h2>
        <p>몸무게 : {체중}</p>
    </div>);
}

export default Child01;
