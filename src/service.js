import fs from "fs/promises"
import path from "path";
import { fileURLToPath } from 'url';
import { marked } from "marked"
import markedKatex from "marked-katex-extension";
import hljs from "highlight.js";

const renderer = new marked.Renderer();

const options = {
    throwOnError: false
};

marked.use(markedKatex(options));

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

marked.use({
    renderer: {
        // Isso lida com todos os tokens de matemática, incluindo inline e display
        // A extensão marked-katex-extension adiciona um token de tipo 'math'
        text(token) {
          if (token.raw.startsWith('$$') && token.raw.endsWith('$$')) {
            // Fórmulas de exibição
            return `<div class="math-formula">${token.raw}</div>`;
          } else if (token.raw.startsWith('$') && token.raw.endsWith('$')) {
            // Fórmulas embutidas
            return `<span class="math-inline">${token.raw}</span>`;
          }
          return false; // Retorne false para o renderer padrão continuar o processamento
        }
    }
});

marked.setOptions({ renderer });


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirPath = path.join(__dirname, 'docs');

async function getFilesRecursively(dirPath) {
    const fileDict = {};

    const files = await fs.readdir(dirPath);

    for(const file of files) {
        const fullPath = path.join(dirPath, file);

        const stats = await fs.stat(fullPath);
        const isDirectory = stats.isDirectory();

        if (isDirectory) {
            if(!fileDict["dirs"]) fileDict["dirs"] = {};
            fileDict["dirs"][file] = await getFilesRecursively(fullPath);
        } else {
            if(!fileDict["files"]) fileDict["files"] = [];
            fileDict["files"].push(file);
        }
    }

    return fileDict;
}

class Service {
    async getFileContent(fileName) {
        const filePath = path.join(
            dirPath,
            fileName.split(';').join("/")
        );
        try {
            const mdContent = await fs.readFile(filePath, 'utf8');
            let htmlTemplate = await fs.readFile(path.join(__dirname, 'mdWindow.html'), 'utf8');
            const htmlFromMd = marked.parse(mdContent);

            htmlTemplate = htmlTemplate.replace('@content', htmlFromMd);
            return htmlTemplate;
        } catch (err) {
            throw new Error('Arquivo não encontrado ou inacessível: ' + err.message);
        }
    }
    async getPaths() {
        const allFiles = getFilesRecursively(dirPath)
        return allFiles;
    }
}

export default Service;