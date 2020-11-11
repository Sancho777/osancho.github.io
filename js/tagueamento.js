// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// Adicionando o analytics.js ( https://developers.google.com/analytics/devguides/collection/analyticsjs )
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');


// Eventos no menu Entre em Contato
let entreEmContato = document.getElementsByClassName('menu-lista-link menu-lista-contato')[0]
entreEmContato.addEventListener('click', function () {
    ga('send', 'event', {
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'
    });
});

// Eventos no menu Dowload Pdf
let downloadPdf = document.getElementsByClassName('menu-lista-link menu-lista-download')[0]
downloadPdf.addEventListener('click', function () {
    ga('send', 'event', {
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
    });
});

// Eventos para os botões da página analise.html
let verMaisBtns = document.getElementsByClassName('card card-montadoras');
for (let i = 0; i < verMaisBtns.length; i++) {
    let btn = verMaisBtns[i];
    btn.addEventListener('click', function () {
        ga('send', 'event', {
            eventCategory: 'analise',
            eventAction: 'ver_mais',
            eventLabel: btn.getAttribute("data-name")
        });
    });
}

// Eventos para campos preenchidos do form na página sobre.html
let nomeField = document.getElementById('nome');
if (nomeField) {
    nomeField.addEventListener('change', function () {
        ga('send', 'event', {
            eventCategory: 'contato',
            eventAction: 'nome',
            eventLabel: 'preencheu'
        })
    });
};

let emailField = document.getElementById('email');
if (nomeField) {
    emailField.addEventListener('change', function () {
        ga('send', 'event', {
            eventCategory: 'contato',
            eventAction: 'email',
            eventLabel: 'preencheu'
        })
    });
};

let telefoneField = document.getElementById('telefone');
if (telefoneField) {
    telefoneField.addEventListener('change', function () {
        ga('send', 'event', {
            eventCategory: 'contato',
            eventAction: 'telefone',
            eventLabel: 'preencheu'
        })
    });
};

let aceitoField = document.getElementById('aceito');
if (aceitoField) {
    aceitoField.addEventListener('change', function () {
        ga('send', 'event', {
            eventCategory: 'contato',
            eventAction: 'aceito',
            eventLabel: 'preencheu'
        })
    });
};

// Evento para o envio de form na página sobre.html
let enviadoBtn = document.getElementsByTagName('button')[0];
if (enviadoBtn) {
    enviadoBtn.addEventListener('click', function () {
        ga('send', 'event', {
            eventCategory: 'contato',
            eventAction: 'enviado',
            eventLabel: 'enviado'
        });
    });
};
