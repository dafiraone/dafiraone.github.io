const arrowDown = document.querySelector('#tomain img')
const myName = document.getElementsByClassName('myname')
const hiddenName = document.getElementsByClassName('showname')
const iconHover = document.getElementsByClassName('icon')
const socialname = document.getElementsByClassName('socialname')
        
window.addEventListener('load', () => {
    window.scrollTo(top)
})

for (let icon of iconHover) {
    icon.addEventListener('mouseover', () => {
        document.getElementById('social').style.backgroundImage = `url('assets/icons8-${icon.classList[0]}.webp')`
        icon.style.width = '200px'
        icon.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
        socialname[0].innerText = `${icon.classList[0]}`
    })
    icon.addEventListener('mouseout', () => {
        document.getElementById('social').style.backgroundImage = `none`
        icon.style.width = '150px'
        icon.style.backgroundColor = 'rgba(217, 217, 217, 0.4)'
        socialname[0].innerText = `My Social`
    })
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'Delete') {
      const svgElement = document.getElementById('tomain');
      if (svgElement) {
        svgElement.parentNode.removeChild(svgElement);
      }
    }
  });

        
setInterval(() => {
    document.getElementById('daffa').style.opacity = '1'
}, 800)

setInterval(() => {
    document.getElementById('irawan').style.opacity = '1'
}, 1200)       
        
        
setInterval(() => {
for (let name of hiddenName) {
        if (window.innerWidth <= 768) {
            name.style.display = 'block'
        } else {
            name.style.display = 'inline'
        }
        document.getElementById('splash').style.backgroundColor = 'white'
        document.getElementById('splash').style.color= 'black'
    }
        
    for (let name of myName) {
        name.addEventListener('mouseover', () => {
            name.style.fontSize = '1.5em'
            name.style.transition = '1s'
        })
        name.addEventListener('mouseout', () => {
            name.style.fontSize = ''
        })
    }
}, 2500)
        
setInterval(() => {
    arrowDown.style.cursor = 'pointer'
}, 4000)
