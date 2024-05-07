import Product from "./Product"

function Products_list()
{
    return (
        <div className = 'Products_list'>
          <Product name="levis jeans" price = "2000" url="https://tse1.mm.bing.net/th?id=OIP.ud1cLMccreBODxye8VNcBAHaJo&pid=Api&P=0&h=180"/>

            <Product name="zara t-shirt" price = "6000" url= "https://tse4.mm.bing.net/th?id=OIP.gtRV3hBK_e7BhJsLoTkTuAHaI4&pid=Api&P=0&h=180"/>
            <Product name="samsung" price = "43000" url="https://tse1.mm.bing.net/th?id=OIP.qVqtjb19XvIFSk0rNrgnOwHaI0&pid=Api&P=0&h=180"/>       
         
            </div>
    )
}
export default Products_list;
