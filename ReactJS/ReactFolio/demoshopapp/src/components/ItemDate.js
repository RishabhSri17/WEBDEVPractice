import './ItemDate.css'

function ItemDate(){
    const day = "20 ";
    const month = "May ";
    const year = "2024 ";

    return(
        <div className='text-center bg-orange-200'>
            <span>{day}</span>
            <span>{month}</span>
            <span>{year}</span>
        </div>
    )
}

export default ItemDate;