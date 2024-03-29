/*const arr = [1,2,3,4,5,6,7,8,9,10]

arr.filter((num) => num*2>=10).forEach(value => {
    console.log(value);
})
*/
const dan = [2,3,4,5,6,7,8,9]
const count = [1,2,3,4,5,6,7,8,9]

const gugudan = dan.map(row =>
    count.map(col => row*col)
)

gugudan.forEach(value => {
    value.forEach( (val,idx) =>
        {
            if(idx == 0)
            {
                console.log(val + "단")
            }
            else
            {
                console.log(val)
            }
            
        }
        
    );
})