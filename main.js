const MAIUSCULAS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'G',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]
const MINUSCULAS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]
const NUMEROS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const ESPECIAL = ['!', '@', '#', '$', '&']

// let configs = [
//   {
//     frase: 'uma frase',
//     site: 'facebook',
//     login: 'um login',
//     configSenha: {
//       maiuscula: true,
//       minuscula: true,
//       numeros: true,
//       especial: true,
//       tamanho: 25
//     }
//   },
//   {
//     frase: 'uma frase',
//     site: 'gmail',
//     login: 'um login',
//     configSenha: {
//       maiuscula: true,
//       minuscula: true,
//       numeros: true,
//       especial: true,
//       tamanho: 25
//     }
//   },
//   {
//     frase: 'uma frase',
//     site: 'gmail',
//     login: 'um login 2',
//     configSenha: {
//       maiuscula: true,
//       minuscula: true,
//       numeros: true,
//       especial: true,
//       tamanho: 25
//     }
//   },
//   {
//     frase: 'uma frase',
//     site: 'gmail',
//     login: 'um login 3',
//     configSenha: {
//       maiuscula: true,
//       minuscula: true,
//       numeros: true,
//       especial: true,
//       tamanho: 25
//     }
//   },
//   {
//     frase: 'uma frase',
//     site: 'DIO',
//     login: 'um login',
//     configSenha: {
//       maiuscula: true,
//       minuscula: true,
//       numeros: true,
//       especial: true,
//       tamanho: 25
//     }
//   },
//   {
//     frase: 'uma frase',
//     site: 'LinkedIn',
//     login: 'um login',
//     configSenha: {
//       maiuscula: true,
//       minuscula: true,
//       numeros: true,
//       especial: true,
//       tamanho: 25
//     }
//   }
// ]

function geraSenha() {
  const config = {}
  config.frase = document.querySelector('#frase').value
  config.site = document.querySelector('#site').value
  config.login = document.querySelector('#login').value
  config.configSenha = {}
  config.configSenha.maiuscula =
    document.querySelector('#maiuscula').checked
  config.configSenha.minuscula =
    document.querySelector('#minuscula').checked
  config.configSenha.numeros = document.querySelector('#numeros').checked
  config.configSenha.especial =
    document.querySelector('#especial').checked
  config.configSenha.tamanho = Number(document.querySelector('#tamanho').value)
  console.log(config)
  //config generator
  const seed = config.frase + config.site + config.login
  const generator = new Math.seedrandom(seed)
  // const randomNumber = generator();
  let senha = ''
  let tipos = []
  if (config.configSenha.maiuscula) {
    tipos.push('maiuscula')
    const sortedPosition = Math.round(generator() * (MAIUSCULAS.length - 1))
    senha += MAIUSCULAS[sortedPosition]
  }
  if (config.configSenha.minuscula) {
    tipos.push('minuscula')
    const sortedPosition = Math.round(generator() * (MINUSCULAS.length - 1))
    senha += MINUSCULAS[sortedPosition]
  }
  if (config.configSenha.numeros) {
    tipos.push('numeros')
    const sortedPosition = Math.round(generator() * (NUMEROS.length - 1))
    senha += NUMEROS[sortedPosition]
  }
  if (config.configSenha.especial) {
    tipos.push('especial')
    const sortedPosition = Math.round(generator() * (ESPECIAL.length - 1))
    senha += ESPECIAL[sortedPosition]
  }

  //adicinar as letras faltantes
  const faltam = config.configSenha.tamanho - senha.length
  for (var i = 0; i < faltam; i++) {
    const sortedTipo = tipos[Math.round(generator() * (tipos.length - 1))]
    if (sortedTipo === 'maiuscula') {
      const sortedPosition = Math.round(generator() * (MAIUSCULAS.length - 1))
      senha += MAIUSCULAS[sortedPosition]
    }
    if (sortedTipo === 'minuscula') {
      const sortedPosition = Math.round(generator() * (MINUSCULAS.length - 1))
      senha += MINUSCULAS[sortedPosition]
    }
    if (sortedTipo === 'numeros') {
      const sortedPosition = Math.round(generator() * (NUMEROS.length - 1))
      senha += NUMEROS[sortedPosition]
    }
    if (sortedTipo === 'especial') {
      const sortedPosition = Math.round(generator() * (ESPECIAL.length - 1))
      senha += ESPECIAL[sortedPosition]
    }
  }

  //embaralhar os caracteres
  let tmpSenha = ''
  const tam = senha.length
  // console.log(senha, tam)
  for (var i = 0; i < tam; i++) {
    const sorted = Math.round(generator() * (senha.length - 1))
    // console.log(sorted)
    let senhaSplit = senha.split('')
    tmpSenha += senhaSplit[sorted]
    // console.log(tmpSenha)
    senhaSplit.splice(sorted, 1)
    senha = senhaSplit.join('')
    // console.log(senha)
  }
  senha = tmpSenha
  console.log(senha)
  const divSenha = document.querySelector('.senha')
  divSenha.innerHTML = senha
  return senha
}

configs.forEach(element => {
  console.log(`Site  = ${element.site} \nSenha = ${geraSenha(element)}\n`)
})
