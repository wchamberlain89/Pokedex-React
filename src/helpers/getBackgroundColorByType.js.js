const backgroundColorsByType = {
  rock: {
    primary: 'hsl(349,32,69)',
    secondary: 'hsl(349, 22, 84)'
  },
  ice: {
    primary: 'hsl(230,90%,93%)',
    secondary: 'hsl(230,90%,88%)'
  },
  dark: {
    primary: 'hsl(336,95%,6%)',
    secondary: 'hsl(336,95%,9%)'
  },
  psychic: {
    primary: 'hsl(319,63%,54%)',
    secondary: 'hsl(319,83%,64%)'
  },
  bug: {
    primary: 'hsl(85, 76%, 46%)',
    secondary: 'hsl(85, 76%, 66%)'
  },
  flying: {
    primary: 'hsl(209,57%,60%)',
    secondary: 'hsl(209,57%,60%)'
  },
  dragon: {
    primary: 'hsl(249,21%,34%)',
    secondary: 'hsl(229, 21%, 55%)'
  },
  grass: {
    primary: 'hsl(123, 58%, 48%)',
    secondary: 'hsl(123, 48%, 64%)'
  },
  fire: {
    primary: 'hsl(3, 72%, 44%)',
    secondary: 'hsl(3, 62%, 60%)'
  },
  water: {
    primary: 'hsl(202,91%,58%)',
    secondary: 'hsl(202, 81%, 72%)'
  },
  steel: {
    primary: 'hsl(210, 4%, 80%)',
    secondary: 'hsl(210, 16%, 60%)',
  },
  fighting: {
    primary: 'hsl(22, 70%, 15%)',
    secondary: 'hsl(22, 80%, 21%)',
  },
  ground: {
    primary: 'hsl(30, 61%, 26%)',
    secondary: 'hsl(30, 51%, 30%)',
  },
  ghost: {
    primary: 'hsl(30, 61%, 26%)',
    secondary: 'hsl(30, 51%, 30%)',
  },
  poison: {
    primary: 'hsl(30, 61%, 26%)',
    secondary: 'hsl(30, 51%, 30%)',
  },
  fairy: {
    primary: 'hsl(30, 61%, 26%)',
    secondary: 'hsl(30, 51%, 30%)',
  },
  electric: {
    primary: 'hsl(30, 61%, 26%)',
    secondary: 'hsl(30, 51%, 30%)',
  },
  normal: {
    primary: 'hsl(30, 61%, 26%)',
    secondary: 'hsl(30, 51%, 30%)',
  },
  rock: {
    primary: 'hsl(30, 61%, 26%)',
    secondary: 'hsl(30, 51%, 30%)',
  },
  
}

const getBackgroundColorByType = (type) => {
  console.log('running getBackgroundColor with type: ', type)
  return backgroundColorsByType[type]
}

export default getBackgroundColorByType