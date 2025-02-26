import { BASE_URL } from "@store/config"
import axios from "axios"


export const getProductByCategory = async (id: string) => {
    console.log("id: ", id)
    try {
        const res = await axios.get(`${BASE_URL}/product/${id}`)

        console.log("reponse of getproductbycategory: ", res)
        return res.data.products
    } catch (error) {
        console.log("Error inside getProductsByCategory: ", error)
    }       
}