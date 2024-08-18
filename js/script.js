let  array = [
    {img:"https://i.pinimg.com/236x/56/f4/df/56f4df94ebb42f3a12b854dd049efc86.jpg"},
    {img:"https://i.pinimg.com/236x/ea/fc/04/eafc042dbc896ff0fdebe101045e751d.jpg"},
    {img:"https://i.pinimg.com/236x/fa/6c/f7/fa6cf710eb7f53a34f32a413fd394e9f.jpg"},
    {img:"https://i.pinimg.com/236x/ba/00/a2/ba00a24ca4b56f59142fd66f1442bea4.jpg"},
    {img:"https://i.pinimg.com/236x/86/03/df/8603df1d979e659913498bc822bfcb9a.jpg"},
    {img:"https://i.pinimg.com/236x/ab/c6/20/abc620953b74004e6b0d1e2b2830e27e.jpg"},
    {img:"https://i.pinimg.com/236x/85/0d/fb/850dfbf3aee5576cbb702cb24ee7fe71.jpg"},
    {img:"https://i.pinimg.com/236x/ae/70/b2/ae70b240322b384a8d003be0f8d1dcf4.jpg"},
    {img:"https://i.pinimg.com/236x/88/d3/99/88d3996ac56731c9eacc72b9153dd5b6.jpg"},
    {img:"https://i.pinimg.com/236x/6e/e9/e4/6ee9e46c1e23094e2fa3f302ea977e6d.jpg"},
    {img:"https://i.pinimg.com/236x/0d/1a/59/0d1a597eb9b0a73e0b262a7b3c9a33f1.jpg"},
    {img:"https://i.pinimg.com/236x/48/9f/26/489f265cd14b648229eb9f77c82d9bde.jpg"},
    {img:"https://i.pinimg.com/236x/b4/45/fd/b445fd31de3feeda872137f956cc9fcb.jpg"},
    {img:"https://i.pinimg.com/236x/0f/31/90/0f3190eb5fa3ab0ce09e60653df6f562.jpg"},
    {img:"https://i.pinimg.com/236x/1c/60/07/1c60071e6065d9f87c5b6fa08935ea2e.jpg"},
    {img:"https://i.pinimg.com/236x/df/54/e1/df54e1c7a6788dfa6a270d9526299509.jpg"},
]
let box = document.querySelector("#boxes")
 let clutter = ""

    array.forEach(function(e){
        clutter += `<div class="box lg:w-[23%] w-[48%] my-6 rounded-3xl overflow-hidden h-full">
        <img class="object-cover object-center w-full h-full" src="${e.img}" alt="">
    </div>`
    })
    box.innerHTML = clutter

















