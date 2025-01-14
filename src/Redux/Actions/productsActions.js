import { db } from '../../Configurations'

export const getProducts = (data) => ({
    type: 'FETCH_PRODUCTS',
    payload: data
})


export const fetchProducts = () => async (dispatch) => {
    const products = db.collection("Products")

    products.get().then((doc) => {

        doc.forEach(d => {
            const itemId = d.id
            const items = {
                itemId,
                ...d.data()
            }
            dispatch(getProducts(items))
        })

    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}

