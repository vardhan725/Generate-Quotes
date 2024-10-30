const Quotes=[
    {
        quote: "What you do today can improve all your tomorrows.",
        author: "Ralph Marston"
      },
      {
        quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar"
      },
      {
        quote: "Intelligence without ambition is a bird without wings.",
        author: "Salvador Dali"
      },
      {
        quote: "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
        author: "Epictetus"
      },
      {
        quote: "We may encounter many defeats but we must not be defeated.",
        author: "May Angelou"
      },
      {
        quote: "Problems are not stop signs, they are guidelines.",
        author: "Robert H. Schuller"
      },
      {
        quote: "Be kind whenever possible. It is always possible.",
        author: "Dalai Lama"
      }
 
]
// button generate
const btn = document.getElementById("m");
// add event listener
btn.addEventListener('click',()=>{
    //get random quote of text
    let random= Math.floor(Math.random() * Quotes.length)
    //console.log(random)
    document.querySelector('.quote').innerText = Quotes[random].quote
    document.querySelector('.author').innerText = Quotes[random].author
  
})
// 