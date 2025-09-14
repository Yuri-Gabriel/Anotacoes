
document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("iframe_render");

    async function carregarDiretorios() {
        await fetch("/api/getPaths").then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o arquivo JSON: ' + response.statusText);
            }
            return response.json();
        }).then(data => {
            const nav = buildNav(data);
            document.getElementById("meu_nav").appendChild(nav)
            document.querySelectorAll('.getFile').forEach(el => {
                el.addEventListener('click', () => {
                    const path = el.getAttribute("data-path");
                    iframe.src = `/api/getFileContent/${path}`;
                });
            });
        })
    }

    function buildNav(data, path = "") {
        const ul = document.createElement("ul");
        if(data.files) {
            data.files.forEach((file) => {
                const li = document.createElement("li");

                li.setAttribute("class", "getFile");
                li.setAttribute(
                    "data-path",
                    path != "" ? `${path};${file}` : file
                );
                li.textContent = file;

                ul.appendChild(li);
            });
        }
        
        if(data.dirs) {
            const keys = Object.keys(data.dirs);
            keys.forEach((key) => {
                const li = document.createElement("li");
                li.textContent = key;
                const subNav = buildNav(
                    data.dirs[key],
                    path != "" ? `${path};${key}` : key
                );
                ul.appendChild(li);
                ul.appendChild(subNav);
            });
        }
        return ul;
    }

    carregarDiretorios();

    document.getElementById("btnDownload").addEventListener("click", () => {
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.print();
        } else {
            console.error('Iframe não encontrado ou não está pronto.');
        }
    })
});

/*
renderer.code = function (code) {
    let codeText = code.text;
    if (typeof codeText !== 'string') {
        codeText = String(codeText);
    }

    const language = code.lang ? code.lang.toLowerCase() : 'plaintext';
    
    // Agora a verificação é robusta para a linguagem
    if (language === 'mermaid') {
        return `<div class="mermaid">${codeText}</div>`;
    }
    
    // Para todas as outras linguagens, use o destaque de sintaxe
    let highlightedCode;
    try {
        if (hljs.getLanguage(language)) {
            highlightedCode = hljs.highlight(codeText, { language }).value;
        } else {
            highlightedCode = hljs.highlightAuto(codeText).value;
        }
    } catch (err) {
        highlightedCode = code;
    }

    return `<pre><code class="hljs language-${language}">${highlightedCode}</code></pre>`;
};
*/