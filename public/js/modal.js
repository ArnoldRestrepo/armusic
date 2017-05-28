// Obtener Còdigo del video
const modalContainer = document.getElementById("ModalContainer");
const getYouTubeCode = url => {
    let inicio  = url.indexOf('?') + 3,
        final   = url.indexOf('&', inicio),
        code    = final === -1 ? url.slice(inicio) : url.slice(inicio,final),
        params  = url.slice(final + 1);
    // console.log(code,params);  
    return final === -1 ? `${code}?` : `${code}?${params}&`;
}

const printYouTubeModal = youTubeVideoCode => {
    const modal = document.createElement('div');

    modal.id = 'modalYouTube';
    modal.classList.add('Modal');

    modal.innerHTML = `
    <div class="ModalContent">
        <a href="#Culture">
            <div id="closeModal" class="Modal-close" title="Cerrar">
                <span class="glyphicon glyphicon-remove"></span>
            </div>
        </a>
        <div class="video">
            <iframe align="center"  src="https://www.youtube.com/embed/${youTubeVideoCode}autoplay=1" allowFullscreen></iframe>
        </div>
    </div>
    `
    modalContainer.appendChild(modal);

    closeModal(modal);
}

// Cerrar eñ modal

const closeModal = modalElement => {
    modalElement.querySelector("#closeModal").addEventListener("click", () => {
        modalContainer.removeChild(modalElement);
    });

    window.addEventListener("keyup", e => {
        if(e.key === "Escape") modalElement.querySelector("#closeModal").click();
    });

}

// Evento para abrir los modales en todos los links
const openYouTubeModal = selector => {
    let linksElements = [...document.querySelectorAll(selector)];
        links = linksElements.map(link => link.href);
    linksElements.forEach((el,i) => {
        el.addEventListener("click", e => {
            e.preventDefault();
            printYouTubeModal(getYouTubeCode(links[i]));
            window.scrollTo(0,0);
        });
    });
}

openYouTubeModal('.modal-youtube');


// console.log(getYouTubeCode('https://www.youtube.com/watch?v=Jw8yXafjaJc&t=3m22s'));

// www.youtube.com/embed/code?params (embed)
// www.youtube.com/watch?v=code&params (ver online)