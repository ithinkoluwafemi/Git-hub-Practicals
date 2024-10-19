let myshop=document.getElementById('shop');
console.log(myshop);
let basket= []


const myProduct = [
    {
        id: 'quququ',
        name: 'Louis Vuitton',
        img:'./shoe1.jpg',
        desc: 'A gentleman\'s desire',
        price: 155000
    },
    {
         id: 'rururu',
        name: 'Mogul Coffee Brown',
        img: './shoe2.jpeg',
        desc: 'For the love of office routine',
        price: 155000
    },
    {
        id: 'vuvuvu',
       name: 'Canverse All stars',
       img: './shoe3.jpeg',
       desc: 'Specially made for the stars',
       price: 155000
   },
   {
    id: 'ououou',
   name: 'Trainers',
   img: './shoe4.jpeg',
   desc: 'Best fit for the Joggers, Ready for the fitness training',
   price: 155000
},
{
    id: 'vuvuvu',
   name: 'NB Checkers ',
   img: './shoe5.webp',
   desc: 'A complete balance for every movement',
   price: 155000
},
]

let femi = () => {
    myshop.innerHTML = myProduct.map((x) => {
        let {id, price, img, desc, name} =x 
        return(
            ` 
    <div id=product-item-${id} class ="item">
    <img src =${img} alt="">
    <h3>${name}</h3>
    <p>${desc}</p>
    
    <div class ="main">
    <main>
    <h4>${price}</h4>
    </main>
    <main class="cartdisplay">
     <span onclick="decrement(${id})">-</span>
     <span id=${id}>0</span>
     <span onclick="increment(${id})">+</span>
     </main>
     </div>
     </div>
     `
        )
    }).join('')
}
femi()

let increment = (id) => {
    let selected = id
    let search = basket.find((x) => x.id ==selected.id);
    if (search===undefined){
    basket.push ({
        id:selected.id,
        item:1 
    })
}else {
    search.item +=1
}
 console.log(selected.id) 
 update(selected.id)
  console.log(basket);
}

let decrement = (id) => {
    let selected = id 
    let search = basket.find((x) => x.id == selected.id);
    if(search === undefined)return
    if(search.item === 0)
        return
    else{
        search.item -= 1
    }
    console.log(basket);
    update(selected.id)

}
    let update = (id) => {
        console.log(id)
    let search = basket.find((x) => x.id == id);
    console.log(search)
    document.getElementById(id).innerHTML=search.item

    cartCalculate()
    

}
 let cartCalculate = () => {

    let search = basket.map((x) => x.item). reduce((prev, next) => prev + next)
    document.getElementById('cartprice').innerHTML=search
 }
