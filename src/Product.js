function Product(props)
{
    
    return (

        <div className = "product">
        <img className= "img" src={props.url}></img>    
           <h3>{props.name}</h3>
     
        <p>{props.price}Rs</p>
        </div>
    )
}
export default Product;