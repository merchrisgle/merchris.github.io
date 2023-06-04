const product = [
    {
        id: 0,
        image: 'images\home-shoe-1.png',
        title:'Nike Metcon Shoes',
        price: 6722,
    },
    {
        id: 1,
        image: 'images\product-1.png',
        title:'Nike Shoes',
        price: 6722,
    },
    {
        id: 2,
        image: 'images\f-img-1.1.png',
        title:'New Nike Airmax Shoes',
        price: 6722,
    },
];
const categories = [...new Set(product.map((Item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
        )
}).join
      
