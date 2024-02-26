export default function TabButton({children, onSelect, isSelected})
{
    // <a>children</a> 구조
    return (
    <li>
        <button className ={isSelected ? "active" : undefined} 
        onClick={onSelect}>{children}</button>
    </li>
    )
}