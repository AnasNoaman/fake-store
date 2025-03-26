const getcategory= async ()=>{

    const {data}= await axios.get(`https://fakestoreapi.com/products/categories`);
       return data;
}

const displaycategory = async ()=>{

    const result= await getcategory();

    const items=result.map( (elemant)=>{
            return `
           
             <div class="category">
            
                <a href="./details.html?category=${elemant}">${elemant}</a>
               </div>
              
            `
    }).join(' ');
        
    document.querySelector('.Categories .row').innerHTML=items;
}
displaycategory();