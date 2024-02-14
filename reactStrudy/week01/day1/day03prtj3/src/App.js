// 클래스형 콤포넌트
// 그냥 이해하고 넘어가도 됩니다. 
// 실제로 함수형 콤포넌트를 더 많이 사용합니다. 

import { Component } from "react";

class Example extends Component {
    constructor(props) {
        super(props);
        // 클래스형 콤포넌트는 state 객체를 임의로 만든다.
        this.state = {count:1, name:"Hong"};
    }

    // 콤포넌트 생명주기 메서드 재정의
    componentDidMount() {
        console.log(">>> componentDidMount", this.state.count);
    }

    componentDidUpdate() {
        console.log(">>> componentDidMount");
    }

    componentWillUnmount() {
        console.log(">>> componentDidMount");
    }

    // render함수 반드시 선언
    render() {
        return (<>
            <p>Count: {this.state.count}</p>
            <p><button onClick={()=>{
                // this.setState()를 이용해서 상태 변경
                // 화살표 함수에서 한줄로 사용하면 {} return 생략 됨.
                this.setState((prevState)=> ({count:prevState.count+1}));
            }}>클릭!</button></p>
        </>);
    }
}

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {inputVal: 'hello'};

        // 핸들러 함수 바인드 하기 - 그래야 바인트 함수에서 this 사용가능.
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
        console.log(e.target.value);
        this.setState({inputVal: e.target.value});
    }

    render() {
        return (<>
            <input type="text" onChange={this.changeHandler} value={this.state.inputVal} />
            <p>입력 된 값: {this.state.inputVal}</p>
        </>)
    }
}

function App() {
    return (<>
        <h1>App Component</h1>
        <Example />
        <hr/>
        <MyForm />
    </>);
}

export default App;