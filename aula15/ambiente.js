let num = [5, 2, 9 ,8, 7]
num.push(1)
console.log(`O array tem ${num.length} posições`)
console.log(`A ordem crescente do array é: ${num.sort()}`)
console.log(`O primeiro valor o vetor é ${num[0]}`)

let pos = num.indexOf(2)
if (pos == -1) {
    console.log('Não encontrei o valor')
} else {
    console.log(`O valor está na posição ${pos}`)
}

