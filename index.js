// Data potentially coming from an outside source.
// e.g. An API, a filesystem, etc.
const buttonData = [
  { text: 'A small button', size: 'small' },
  { text: 'A large button', size: 'large' },
  { text: 'A medium button', size: 'medium' },
]

function textCreator(text) {
  const span = document.createElement('span')
  span.textContent = text
  span.style.color = 'white'

  return span
}

function imageCreator(src) {
  const img = document.createElement('img')
  img.src = src
  img.style.width = '20px'
  img.style.height = '20px'

  return img
}

// Our component creator function.
// Call any number of times to create a new component!
function buttonCreator(text, size = 'medium' /* creates a deafult value in case no size is passed when the function is called */) {
  const button = document.createElement('button')
  button.classList.add('btn-primary')
  button.classList.add(`btn-${size}`)

  // Nesting other components inside the button.
  // There is no limit to the amount of nested components!
  button.appendChild(textCreator(text || 'some default value'))
  button.prepend(imageCreator('https://placekitten.com/20/20'))

  // Event listener will be on every button.
  button.addEventListener('click', () => {
    console.log(`Button fo size ${size} was clicked`)
  })

  return button
}

// Our button container.
const container = document.querySelector('#container')

// Create an array of button components.
// NOTE: These are not added to the DOM yet!
const buttonComponents = buttonData.map((button) => {
  return buttonCreator(button.text, button.size)
})

// Change text content without having to use another DOM selector.
buttonComponents[1].textContent = 'Hello World'

// Add each component to the container.
buttonComponents.forEach((button) => {
  container.appendChild(button)
})

