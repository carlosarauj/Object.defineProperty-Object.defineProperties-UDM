function Produto(nome,preco,estoque){
    this.nome= nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: true
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: true

        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true

        },
    })
}

let p1 = new Produto('Camiseta', 20, 3)

console.log(p1)

for(let chave in p1){
    console.log(chave)
}