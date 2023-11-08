var botao = document.getElementById('botao');
botao.addEventListener('click', clicar)

function clicar () {
  
  var inicio = Number(document.getElementById('button11').value)
  var fim = Number(document.getElementById('button22').value)
  var valor = Number(document.getElementById('button33').value)
  var resultado = document.getElementById('res')
      
if (inicio == 0 || fim == 0 || valor == 0) {
        window.alert('Preencha todos os campos!')
      } else if (inicio > fim ){
        window.alert('O primeiro Número é menor, é impossível contar!')
        
        } else {
          resultado.innerHTML = 'Contando: '
            if (inicio <= fim) {
              for(let c = inicio; c <= fim; c = c + valor) {
                resultado.innerHTML += `${c} `
              }
            }
        }
        
      }
    