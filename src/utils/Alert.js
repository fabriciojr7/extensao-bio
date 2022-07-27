import Swal from 'sweetalert2';

export const Alert = (
    title = '', msg = '', icon = 'success'
) => {
    Swal.fire({
        title: title,
        icon: icon,
        html: msg,
        showConfirmButton: true,
        confirmButtonColor: '#00b35e',

    });
};



export const ConfirmeAlert = (
    { titlePergunta = '',
        textPergunta = '',
        iconPergunta = 'info',
        confirmePergunta = '',
        cancelPergunta = 'Cancelar',
        html = ''
    },
    func
) => {
    Swal.fire({
        title: titlePergunta,
        text: textPergunta,
        html: html,
        icon: iconPergunta,
        showCancelButton: true,
        confirmButtonColor: '#00b35e',
        cancelButtonColor: '#eb2d3b',
        confirmButtonText: confirmePergunta,
        cancelButtonText: cancelPergunta
    }).then((result) => {
        if (result.isConfirmed) {
            func();
        }
    });
};
