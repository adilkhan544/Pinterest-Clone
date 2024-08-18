let time = document.querySelector("#time")
let date = new Date().toDateString()
time.innerHTML = date

let arr = [
  {
    img:
      'https://i.pinimg.com/564x/06/02/d4/0602d47aed72cfd1e45f918932460261.jpg',
    h1: 'Go Big or Go Home',
    p: 'Glamorous Makeup Looks for Diwali',
  },

  {
    img:
      'https://i.pinimg.com/564x/24/0e/5f/240e5f172824cb8cd805a8b5f66252a2.jpg',
    h1: '#DilkiDiwali',
    p: 'Happy Diwali Greeting and Wallpapers',
  },
  {
    img:
      'https://i.pinimg.com/236x/4b/db/0b/4bdb0b0d39d16aa999eb2587c78d687b.jpg',
    h1: 'Best Buys',
    p: 'Shopping Spotlight: Festive Fashion',
  },
  {
    img:
      'https://i.pinimg.com/564x/cf/13/1b/cf131bafd2afb40a9e7970d869d7a098.jpg',
    h1: 'Diwali Rangoli Designs',
    p: 'Easy Peasy',
  },
  {
    img:
      'https://i.pinimg.com/564x/46/2e/1c/462e1c68d8a643e85f00659064d48a26.jpg',
    h1: 'Serve Your Best Look',
    p: 'Get Ready to Diwali Party in style',
  },
  {
    img:
      'https://i.pinimg.com/564x/c8/a8/44/c8a8443a1fa798e92c7a83470f03953c.jpg',
    h1: 'Your Decor Guide',
    p: 'Safe, Sustainable & Grand Diwali Decor',
  },
]
let box = document.querySelector('#boxes')
let clutter = ''
arr.forEach((e) => {
  clutter += ` <div class="box h-full md:w-[45%] lg:w-[30%] w-[80%] rounded-3xl flex my-4 text-center justify-end items-center py-8 flex-col bg-cover bg-center bg-[url('${e.img}')]">
  <h1 class="text-3xl ">${e.h1}</h1>
     <p class="text-5xl "  >${e.p}</p>
     </div>`
})
     box.innerHTML = clutter