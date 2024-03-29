function ask(question, yes, no)
{
    if(confirm(question))yes()
    else no()
}

console.log("dddd");
const a = () => {alert("동의하셨습니다.")};
const b = () => {alert("미동의")};
ask ( "동의하십니까?", 
a,
b
)