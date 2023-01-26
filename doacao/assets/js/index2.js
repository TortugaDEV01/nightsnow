const btn = document.getElementById('btn-copy');
const msg = document.getElementById('msg');
const linha = document.getElementById('linha');
const erro = document.getElementById('erro');
const errotext = document.getElementById('errotext');
const icon = document.getElementById('icon');
const iconerr = document.getElementById('iconerr');

msg.style.display = 'none';
msg.style.opacity = '0%';
msg.style.transition = '0.5s';
btn.addEventListener('click', () => {
    const text = document.getElementById('pix').innerHTML;

    navigator.clipboard.writeText(text)
    .then((result) => {
        console.log('Pix copiado com sucesso')
        msg.style.display = 'block';
        icon.style.display = 'block';
        iconerr.style.display = 'none';
        setTimeout(() => {
            msg.style.opacity = '100%';
            linha.style.animation = 'linha 3s linear';
        }, 100);
        setTimeout(() => {
            msg.style.opacity = '0%';
            setTimeout(() => {
                msg.style.display = 'none';
            }, 200);
        }, 4000);
    }).catch((err) => {
        console.error('Erro ao copiar o pix')
        msg.style.backgroundColor = 'red';
        msg.style.borderBottom = '3px solid #ad0000';
        erro.innerHTML = 'Erro ao copiar';
        errotext.innerHTML = 'Erro ao copiar o pix';
        linha.style.backgroundColor = '#ad0000';
        msg.style.display = 'block';
        icon.style.display = 'none';
        iconerr.style.display = 'block';
        setTimeout(() => {
            msg.style.opacity = '100%';
            linha.style.animation = 'linha 3s linear';
        }, 100);
        setTimeout(() => {
            msg.style.opacity = '0%';
            setTimeout(() => {
                msg.style.display = 'none';
            }, 200);
        }, 4000);
    });
});