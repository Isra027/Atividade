function formatarPreco(valor) {
    return new Intl.NumberFormat('pt-BR',{style: "currency", currency: "BRL"}).format(valor)
}

console.log(formatarPreco(1990.5))