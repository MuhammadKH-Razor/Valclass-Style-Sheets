// property, tag dan value - Muhammad Khoirul Huda

let propertiesAlignContents = [
    'v-content-center',
    'v-content-flex-end',
    'v-content-flex-start',
    'v-content-stretch',
    'v-content-between',
    'v-content-around'
]

let valuesAlignContents = [
    'align-content: center;',
    'align-content: flex-end;',
    'align-content: flex-start;',
    'align-content: stretch;',
    'align-content: space-between;',
    'align-content: space-around;',
]

// pengkondisian

for (var i = 0; i < propertiesAlignContents.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

        let styles = ` 
        .${propertiesAlignContents[i]} { 
            ${valuesAlignContents[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesAlignContents.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesAlignContents[i]) && !document.querySelector('style').innerText.includes(propertiesAlignContents[i])) {

                let styles = ` 
            .${propertiesAlignContents[i]} { 
                ${valuesAlignContents[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda