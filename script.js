function calcular(){
    let compra = document.querySelector('input#txtcompra')
    let venda = document.querySelector('input#txtvenda')
    let res = document.querySelector('div#res')

    let perc

    perc = 100 - ((Number(venda.value)*100) / Number(compra.value))

    res.innerHTML = `Percentual a ser aplicado: ${perc.toFixed(2)}%`
}