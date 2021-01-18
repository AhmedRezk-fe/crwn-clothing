export const addItemToCart = (itemCart , addToCart) => {
  const  extentItemCart = itemCart.find(item => item.id == addToCart.id  )

    if(extentItemCart) {
       return  itemCart.map(item => item.id == addToCart.id ? {...item , quantity : item.quantity + 1 }: item )
    }


    return [...itemCart ,{ ...addToCart , quantity: 1 }]
}