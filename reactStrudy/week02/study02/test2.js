//const arr=["kim", "lee"]
//const [first, second] = arr;
//console.log(first);
//console.log(second);

let user = {
    name : "jhon",
    years : 30
}
let {name , age , isAdmin = false} = user;

console.log(name);
console.log(age);
console.log(isAdmin);

let salaries = 
{
    "John" : 100,
    "Pete" : 300,
    "Mary" : 250
};

console.log(Object.entries(salaries));

function getTop()
{
    let top = 0;
    let name = null;
    Object.entries(salaries).forEach(salary =>{
        let [sn, money] = salary;
        if(money > top)
        {
            top = money;
            name = sn;
        }
    })
    return name;
}

let topMan = getTop();
console.log(topMan);
