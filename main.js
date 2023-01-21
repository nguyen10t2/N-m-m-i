function createBur(){
    const nammoi = document.querySelector('.nam-moi')
    const phaohoa = document.querySelector('.phaohoa')
    const lines = document.querySelector('.line')

    phaohoa.style.top = Math.random() * innerHeight + 'px'
    phaohoa.style.left = Math.random() * innerWidth + 'px'

    const phaohoaClone = phaohoa.cloneNode(true);
    nammoi.appendChild(phaohoaClone)

    setTimeout(() => {
        phaohoaClone.remove();
    }, 3000);
}
setInterval(createBur, 400)