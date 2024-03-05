export default function TabButton({children, isSelected, ...props})
{
    // <a>children</a> 구조
    return (
    <li>
        <button className ={isSelected ? "active" : undefined} 
       {...props}>{children}</button>
    </li>
    )
}