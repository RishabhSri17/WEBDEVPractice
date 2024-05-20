import './Item.css'

function Item(props){
    /* const itemName = "NIRMA"; */
    const itemName = props.name;
    return(<div><p className="text-center bg-lime-400">{itemName}</p>
    {props.children}</div>);
}

export default Item;