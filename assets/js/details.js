
const getproduct = async ()=>{
    const urlp = new URLSearchParams(window.location.search);
    const categories=urlp.get('category');
    const {data}= await axios.get(`https://fakestoreapi.com/products/category/${categories}`);
    return data;
}


const displayProduct= async ()=>{
    const products=await getproduct();
    const resultP = products.map((product)=>{
        return `
        
         
            <div class="parent">
             <div class="product_left">
               <div class="logo">
                <img class="img" src="${product.image}"/>
               </div>
               </div>

               <div class="product_right">
                <h1 class="h">${product.title}</h1>
                <p class="desc">${product.description}</p>
                <p class="price">Price: ${product.price} $</p>
               </div>
            </div>
              
             

        `
    }).join(' ');
    document.querySelector('.products .row').innerHTML=resultP;
}
displayProduct();
