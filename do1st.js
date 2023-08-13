let headings = document.getElementsByTagName('h1')

for (const h1 of headings){
    console.log(h1.innerText)
}
// console.log(h1.innertext)
const allelement = document.getElementsByTagName('li')
for( const li of allelement){
    console.log(li.innerText)
}


 document.getElementById('list').style.fontSize = '30px';

//  event method

  function makeRed(){
    document.body.style.backgroundColor = 'red'
  }

  const makeGreen = document.getElementById('make-green')
  makeGreen.onclick = function bgreen(){
    document.body.style.backgroundColor = 'green'
  }

  const makeBlue = document.getElementById('make-blue')
  makeBlue.addEventListener('click', bgBlue) 
  function bgBlue(){
    document.body.style.backgroundColor = 'blue'
  }
  const makePurple = document.getElementById('make-purple')
  makePurple.addEventListener('click', bgPurple) 
  function bgPurple(){
    document.body.style.backgroundColor = 'purple'
  }
  
document.getElementById('make-yellow').addEventListener('click', function bgYellow(){
    document.body.style.backgroundColor = 'yellow'
})
  





  
