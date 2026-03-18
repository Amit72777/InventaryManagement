import CreateProduct from "./components/CreateProduct.jsx";
import GetProducts from "./components/GetProduct.jsx";
import SearchProduct from "./components/SearchProduct.jsx";
import UpdateProduct from "./components/UpdateProduct.jsx";
import DeleteProduct from "./components/DeleteProduct.jsx";
import { useState } from "react";
function App(){
const [refresh,setRefresh] = useState(false)

const reloadProducts = ()=>{
setRefresh(!refresh)
}

return(

<div>

<h1>Inventory Management System</h1>

<CreateProduct reloadProducts={reloadProducts}/>

<SearchProduct/>

<UpdateProduct/>

<DeleteProduct/>

<GetProducts refresh={refresh}/>

</div>

)

}

export default App