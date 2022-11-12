const btn = querySelector('#btn');
const res = document.querySelector('#div-res');

res.innerHTML = `<p>Preencha os dados a cima para ver o resultado.</p>`


btn.addEventListener("click", function(event){

    event.preventDefault()

    const ini = querySelector('#ini')
    const fim = querySelector('#fim')
    const pas = querySelector('#pas')

    if(fim > ini || pas > fim){
        window.alert("[ERRO] tente preencher os dados corretamente")
    }
})