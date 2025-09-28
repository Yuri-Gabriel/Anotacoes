
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

            addDirsEvent();

            document.querySelectorAll('.getFile').forEach(el => {
                el.addEventListener('click', () => {
                    const name = el.textContent.replace('.md', '');
                    document.title = name;

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
                li.setAttribute("class", "dir");
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

    

    function addDirsEvent() {
        const liDirs = document.getElementsByClassName('dir');
        console.log('Elementos encontrados:', liDirs.length);
        
        for(let i = 0; i < liDirs.length; i++) {
            const el = liDirs[i];
            el.addEventListener("click", () => {
                const is_open = el.nextElementSibling.classList.contains("dir_open");
                
                if(is_open) {
                    el.nextElementSibling.classList.remove("dir_open");
                    el.style.removeProperty('--before-rotation', '90deg');
                } else {
                    el.nextElementSibling.classList.add("dir_open");
                    el.style.setProperty('--before-rotation', '180deg');
                }
            });
        }
    }

    document.getElementById("btnDownload").addEventListener("click", () => {
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.print();
        } else {
            console.error('Iframe não encontrado ou não está pronto.');
        }
    })
});