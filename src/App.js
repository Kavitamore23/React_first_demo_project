
import './App.css';
import Header from './Header';
import Products_list from './Products_list';

function App() {

function dosomething(data)
{
  console.log("Hello i am clicked"+data)

}
  return (
    <div className="App">
     
    <Header/>

    <Products_list/>

    <button className= 'btn' onClick={()=>{
    dosomething("Kavish")
    }}>Click</button>

</div>
    );
}

export default App;
