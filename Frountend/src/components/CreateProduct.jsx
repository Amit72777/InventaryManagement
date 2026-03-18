import { useState } from "react"
import { createProduct } from "../services/api"

function CreateProduct({ reloadProducts }) {

    const [product, setProduct] = useState("")
    const [category, setCategory] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        await createProduct({
            product,
            category,
            quantity,
            price
        })

        alert("Product Created")

        reloadProducts()   // 👈 important line

    }

    return (

        <div>

            <h2>Create Product</h2>

            <form onSubmit={handleSubmit}>

                <input
                    placeholder="Product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                />
                <br/>
                <input
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <br/>
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <br/>

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <br/>

                <button>Create</button>

            </form>

        </div>

    )

}

export default CreateProduct