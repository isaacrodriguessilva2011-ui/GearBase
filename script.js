
const Processador = {
    nome: "Processador (CPU)",
    tipo: "Processamento",
    explicacao: "É como se fosse o cérebro do PC.",
    plataforma: "PC",
    problema: "O PC aquece ou fica demasiado lento",
    solucao: "Verifica se as entradas de ar estão desobstruídas e se as ventoinhas funcionam. Se o problema continuar, pede ajuda a um técnico."
};

const ProcessadorPS5 = {
    nome: "Processamento da PS5",
    tipo: "Processamento",
    explicacao: "Executa as instruções dos jogos e do sistema. A CPU faz parte de um chip personalizado.",
    plataforma: "PS5"
};

const gpu = {
    nome: "Placa Gráfica (GPU)",
    tipo: "Gráficos",
    explicacao: "É responsável por processar as imagens que aparecem no ecrã.",
    plataforma: "PC"
};

const Ram = {
    nome: "Memória RAM",
    tipo: "Memória",
    explicacao: "Guarda temporariamente os dados que o PC está a utilizar.",
    plataforma: "PC"
};

const motherboard = {
    nome: "Motherboard (placa-mãe)",
    tipo: "Ligação e comunicação",
    explicacao: "É a placa principal que liga os componentes do computador.",
    plataforma: "PC"
};

const graficosPS5 = {
    nome: "Gráficos da PS5",
    tipo: "Gráficos",
    explicacao: "Processa os gráficos e os efeitos visuais dos jogos.",
    plataforma: "PS5"
};

const graficosXbox = {
    nome: "Gráficos da Xbox",
    tipo: "Gráficos",
    explicacao: "Processa as imagens e os efeitos visuais dos jogos.",
    plataforma: "Xbox"
};

const memoriaPS5 = {
    nome: "Memória RAM da PS5",
    tipo: "Memória",
    explicacao: "A PS5 utiliza memória GDDR6 partilhada pelo sistema e pelos gráficos. Não é um módulo que o utilizador possa substituir normalmente.",
    plataforma: "PS5"
};

const memoriaXbox = {
    nome: "Memória RAM da Xbox",
    tipo: "Memória",
    explicacao: "A Xbox Series X|S utiliza memória GDDR6 partilhada entre o sistema e os gráficos.",
    plataforma: "Xbox"
};

const motherboardPS5 = {
    nome: "Motherboard da PS5",
    tipo: "Ligação e comunicação",
    explicacao: "É a placa principal da consola, que liga os seus componentes.",
    plataforma: "PS5"
};

const motherboardXbox = {
    nome: "Motherboard da Xbox",
    tipo: "Ligação e comunicação",
    explicacao: "É a placa principal da consola, que liga os seus componentes.",
    plataforma: "Xbox"
};

const ssdPC = {
    nome: "SSD de PC",
    tipo: "Armazenamento",
    explicacao: "Guarda o sistema, os programas e os ficheiros. Pode usar SATA ou NVMe através de PCIe.",
    plataforma: "PC"
};

const ProcessadorXbox = {
    nome: "Processador da Xbox (CPU)",
    tipo: "Processamento",
    explicacao: "Executa as instruções dos jogos e do sistema.",
    plataforma: "Xbox"
};

const ssdPS5 = {
    nome: "SSD da PS5",
    tipo: "Armazenamento",
    explicacao: "A PS5 utiliza um SSD rápido. O espaço pode ser expandido com um SSD M.2 NVMe compatível.",
    plataforma: "PS5"
};

const ssdxbox = {
    nome: "SSD da Xbox",
    tipo: "Armazenamento",
    explicacao: "A capacidade da Xbox pode ser aumentada com soluções de expansão compatíveis.",
    plataforma: "Xbox"
};

const glossario = {
    sata: "É uma interface usada para ligar unidades de armazenamento ao computador.",
    nvme: "É um protocolo que permite aos SSD comunicar rapidamente com o computador.",
    pcie: "É uma ligação de alta velocidade usada por componentes como placas gráficas e SSD."
};

const componentes = [
    Processador, gpu, Ram, motherboard,
    ProcessadorPS5, graficosPS5, memoriaPS5,
    motherboardPS5, ssdPS5,
    ProcessadorXbox, graficosXbox, memoriaXbox,
    motherboardXbox, ssdxbox, ssdPC
];

let plataformaAtual = "";
let paginaAtual = "inicio";

function alterarMenu() {
    document.getElementById("Menunavegacao").classList.toggle("aberto");
}

function mostrarPagina(pagina) {
    paginaAtual = pagina;

    const zonaComponentes = document.getElementById("zonaComponentes");
    const zonaProblemas = document.getElementById("zonaProblemas");
    const tituloProblemas = document.getElementById("tituloProblemas");
    const pesquisaProblemas = document.getElementById("pesquisaProblemas");
    const resultadosProblema = document.getElementById("resultados-problema");
    const tituloExplorar = document.getElementById("tituloExplorar");
    const textoExplorar = document.getElementById("textoExplorar");

    const eProblemas = pagina === "arranjar";
    const eInicio = pagina === "inicio";

    zonaComponentes.hidden = eProblemas;
    zonaProblemas.hidden = !eProblemas;

    tituloProblemas.hidden = !eProblemas;
    pesquisaProblemas.hidden = !eProblemas;
    resultadosProblema.hidden = !eProblemas;

    if (tituloExplorar) tituloExplorar.hidden = !eInicio;
    if (textoExplorar) textoExplorar.hidden = !eInicio;

    plataformaAtual = "";

    if (pagina === "pc" || pagina === "ps5" || pagina === "xbox") {
        plataformaAtual = pagina.toUpperCase();
        document.getElementById("Pesquisa").value = plataformaAtual;
        pesquisarVarios();
    } else {
        document.getElementById("Pesquisa").value = "";
        document.getElementById("resultados-pesquisa").innerHTML = "";
        fecharComponente();
    }

    document.getElementById("resultados-problema").innerHTML = "";
    document.getElementById("Menunavegacao").classList.remove("aberto");
}

function mostrarcomponente(indice) {
    const componente = componentes[indice];

    if (!componente) return;

    const detalhes = document.getElementById("detalhesComponente");
    if (detalhes) detalhes.hidden = false;

    document.getElementById("nome").textContent = componente.nome;
    document.getElementById("tipo").textContent = componente.tipo;
    document.getElementById("explicacao").innerHTML =
        criarLinksGlossario(componente.explicacao);

    document.getElementById("botaoFecharComponente").hidden = false;
    document.getElementById("definicao-termo").hidden = true;
}

function fecharComponente() {
    const detalhes = document.getElementById("detalhesComponente");
    if (detalhes) detalhes.hidden = false;

    document.getElementById("nome").textContent = "Descobre os Componentes";
    document.getElementById("tipo").textContent = "";
    document.getElementById("explicacao").textContent =
        "Pesquisa por um componente para aprenderes como funciona.";

    document.getElementById("botaoFecharComponente").hidden = true;
    document.getElementById("definicao-termo").hidden = true;
}

function criarLinksGlossario(texto) {
    return texto.replace(/\b(SATA|NVMe|PCIe)\b/gi, function (palavra) {
        const termo = palavra.toLowerCase();

        return `<button class="link-termo" onclick="mostrarDefinicao('${termo}')">${palavra}</button>`;
    });
}

function mostrarDefinicao(termo) {
    document.getElementById("termo-titulo").textContent = termo.toUpperCase();
    document.getElementById("termo-texto").textContent = glossario[termo];
    document.getElementById("definicao-termo").hidden = false;
}

function fecharDefinicao() {
    document.getElementById("definicao-termo").hidden = true;
}

function pesquisarVarios() {
    const termo = document.getElementById("Pesquisa").value.toLowerCase().trim();
    const area = document.getElementById("resultados-pesquisa");

    area.innerHTML = "";

    if (!termo) {
        area.textContent = "Escreve o nome de um componente ou escolhe uma plataforma.";
        return;
    }

    const resultados = componentes
        .map((componente, indice) => ({ componente, indice }))
        .filter(({ componente }) => {
            const texto = (
                componente.nome + " " +
                componente.tipo + " " +
                componente.plataforma + " " +
                componente.explicacao
            ).toLowerCase();

            const ePlataforma = ["pc", "ps5", "xbox"].includes(termo);

            return ePlataforma
                ? componente.plataforma.toLowerCase() === termo
                : texto.includes(termo);
        });

    if (resultados.length === 0) {
        area.textContent = "Não encontrei resultados.";
        return;
    }

    resultados.forEach(({ componente, indice }) => {
        const botao = document.createElement("button");
        botao.className = "resultado-pesquisa";
        botao.textContent = componente.nome;
        botao.onclick = () => mostrarcomponente(indice);
        area.appendChild(botao);
    });
}

function pesquisarProblema() {
    const pesquisaInput = document.getElementById("PesquisaProblema");
    const resultados = document.getElementById("resultados-problema");

    if (!pesquisaInput || !resultados) {
        return;
    }

    const normalizar = (texto) =>
        texto.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

    const pesquisa = normalizar(pesquisaInput.value.trim());

    resultados.replaceChildren();

    if (pesquisa === "") {
        resultados.textContent = "Escreve o problema que estás a ter.";
        return;
    }

    let plataforma = "";

    if (/\bps5\b/.test(pesquisa) || pesquisa.includes("playstation")) {
        plataforma = "PS5";
    } else if (/\bxbox\b/.test(pesquisa)) {
        plataforma = "Xbox";
    } else if (/\bpc\b/.test(pesquisa) || pesquisa.includes("computador")) {
        plataforma = "PC";
    }

    const encontrados = problemas.filter((item) => {
        const plataformaCorreta =
            plataforma === "" || item.plataforma === plataforma;

        const termosCorretos = item.termos.some((termo) =>
            pesquisa.includes(normalizar(termo))
        );

        return plataformaCorreta && termosCorretos;
    });

    if (encontrados.length === 0) {
        resultados.textContent =
            "Não encontrei uma solução para essa pesquisa. Experimenta escrever o problema de outra forma.";
        return;
    }

    encontrados.forEach((item) => {
        const cartao = document.createElement("article");
        cartao.className = "cartao-problema";

        const titulo = document.createElement("h3");
        titulo.textContent = item.plataforma + " — " + item.problema;

        const solucao = document.createElement("p");
        solucao.textContent = "Solução: " + item.solucao;

        cartao.append(titulo, solucao);
        resultados.appendChild(cartao);
    });
}


const problemas = [
    // PROBLEMAS DE PC
    {
        plataforma: "PC",
        problema: "O PC está lento",
        termos: ["lento", "lentidao", "demora", "devagar"],
        solucao: "Fecha programas que não estás a utilizar, reinicia o computador e verifica se tens espaço livre no disco. Também podes desativar aplicações desnecessárias no arranque."
    },
    {
        plataforma: "PC",
        problema: "O PC aquece demasiado",
        termos: ["aquece", "quente", "sobreaquece", "temperatura", "aquecimento"],
        solucao: "Coloca o computador num local ventilado e verifica se as saídas de ar estão tapadas por pó ou objetos. Se continuar a aquecer muito, pede ajuda a um técnico."
    },
    {
        plataforma: "PC",
        problema: "O PC não liga",
        termos: ["nao liga", "nao arranca", "nao inicia", "sem energia"],
        solucao: "Confirma se o cabo de alimentação está bem ligado e se a tomada funciona. Num portátil, verifica também o carregador. Se não houver sinais de energia, procura assistência técnica."
    },
    {
        plataforma: "PC",
        problema: "O PC liga, mas não aparece imagem",
        termos: ["sem imagem", "ecra preto", "monitor preto", "sem video"],
        solucao: "Confirma se o monitor está ligado, se selecionaste a entrada correta e se o cabo de vídeo está bem conectado. Se continuar sem imagem, poderá ser necessária uma verificação técnica."
    },
    {
        plataforma: "PC",
        problema: "Os jogos estão lentos",
        termos: ["jogo lento", "jogos lentos", "fps baixo", "lag", "trava nos jogos"],
        solucao: "Fecha programas em segundo plano, verifica os requisitos do jogo e atualiza os controladores gráficos através da fonte oficial. Experimenta também reduzir as definições gráficas."
    },
    {
        plataforma: "PC",
        problema: "O PC não tem Internet",
        termos: ["sem internet", "sem wifi", "nao conecta", "sem rede"],
        solucao: "Confirma se o Wi-Fi está ligado, reinicia o router e testa a ligação noutro dispositivo. Se só o PC falhar, verifica as definições de rede."
    },
    {
        plataforma: "PC",
        problema: "O PC está sem som",
        termos: ["sem som", "nao tem som", "audio", "auscultadores"],
        solucao: "Confirma o volume, escolhe o dispositivo de saída correto e verifica se os auscultadores ou colunas estão bem ligados. Se necessário, verifica os controladores de áudio."
    },
    {
        plataforma: "PC",
        problema: "O disco está quase cheio",
        termos: ["disco cheio", "sem espaco", "armazenamento cheio", "pouco espaco"],
        solucao: "Desinstala aplicações que já não utilizas e elimina ficheiros desnecessários. Usa as ferramentas de armazenamento do Windows e confirma os ficheiros antes de os apagar."
    },
    {
        plataforma: "PC",
        problema: "O PC desliga-se sozinho",
        termos: ["desliga sozinho", "desligar sozinho", "desliga se", "reinicia sozinho"],
        solucao: "Verifica se o computador está a aquecer e se os cabos de alimentação estão bem ligados. Se acontecer repetidamente, interrompe a utilização e pede uma avaliação técnica."
    },
    {
        plataforma: "PC",
        problema: "O PC faz muito barulho",
        termos: ["barulho", "ventoinha", "faz ruido", "ruidoso"],
        solucao: "Verifica se as entradas e saídas de ar estão desimpedidas. Um aumento súbito do ruído pode indicar aquecimento ou uma ventoinha com problemas."
    },

    // PROBLEMAS DE PS5
    {
        plataforma: "PS5",
        problema: "A PS5 aquece demasiado",
        termos: ["aquece", "quente", "sobreaquece", "temperatura", "aquecimento"],
        solucao: "Coloca a consola num espaço aberto e bem ventilado, longe de tecidos e fontes de calor. Desliga-a antes de limpar o exterior. Se apresentar avisos de temperatura, desliga-a e deixa-a arrefecer."
    },
    {
        plataforma: "PS5",
        problema: "A PS5 não liga",
        termos: ["nao liga", "nao arranca", "nao inicia", "sem energia"],
        solucao: "Confirma o cabo de alimentação e a tomada. Desliga a consola corretamente sempre que possível. Se não responder ou continuar sem ligar, consulta o suporte oficial da PlayStation."
    },
    {
        plataforma: "PS5",
        problema: "A PS5 liga, mas não aparece imagem",
        termos: ["sem imagem", "ecra preto", "monitor preto", "sem video"],
        solucao: "Verifica se a televisão está na entrada HDMI correta e confirma as ligações do cabo HDMI. Experimenta outra entrada ou outro cabo compatível."
    },
    {
        plataforma: "PS5",
        problema: "O comando não se liga à PS5",
        termos: ["comando", "comando nao liga", "dualSense", "controle", "nao conecta comando"],
        solucao: "Carrega o comando e liga-o à consola com um cabo USB que permita transferência de dados. Se continuar sem funcionar, consulta as instruções oficiais para repor o comando."
    },
    {
        plataforma: "PS5",
        problema: "Os downloads são lentos",
        termos: ["download lento", "downloads lentos", "internet lenta", "wifi lento"],
        solucao: "Testa a ligação à Internet nas definições da consola, aproxima-a do router ou experimenta uma ligação por cabo de rede. Confirma também se existem problemas no serviço online."
    },
    {
        plataforma: "PS5",
        problema: "Os jogos bloqueiam ou fecham",
        termos: ["jogo bloqueia", "jogo fecha", "crasha", "crash", "jogo trava"],
        solucao: "Atualiza o jogo e o software da consola. Reinicia a PS5 e verifica se o problema acontece apenas num jogo. Se continuar, consulta o suporte oficial antes de considerar outras opções."
    },
    {
        plataforma: "PS5",
        problema: "A PS5 tem pouco espaço",
        termos: ["disco cheio", "sem espaco", "armazenamento cheio", "pouco espaco"],
        solucao: "Em Definições, consulta o armazenamento e remove jogos ou aplicações que já não utilizas. Confirma sempre os dados guardados antes de eliminar conteúdo."
    },
    {
        plataforma: "PS5",
        problema: "A PS5 faz demasiado barulho",
        termos: ["barulho", "ventoinha", "faz ruido", "ruidoso"],
        solucao: "Confirma se a consola está bem ventilada e se as aberturas exteriores estão desimpedidas. Se o ruído for novo, muito intenso ou acompanhado de avisos, consulta a assistência oficial."
    },

    // PROBLEMAS DE XBOX
    {
        plataforma: "Xbox",
        problema: "A Xbox aquece demasiado",
        termos: ["aquece", "quente", "sobreaquece", "temperatura", "aquecimento"],
        solucao: "Coloca a consola num local aberto, com espaço à volta das saídas de ar. Evita tapá-las ou colocá-la junto de fontes de calor. Se aparecer um aviso de temperatura, desliga-a e deixa-a arrefecer."
    },
    {
        plataforma: "Xbox",
        problema: "A Xbox não liga",
        termos: ["nao liga", "nao arranca", "nao inicia", "sem energia"],
        solucao: "Confirma as ligações de alimentação e a tomada. Se a consola continuar sem ligar após verificares os cabos, consulta o suporte oficial da Xbox."
    },
    {
        plataforma: "Xbox",
        problema: "A Xbox liga, mas não aparece imagem",
        termos: ["sem imagem", "ecra preto", "monitor preto", "sem video"],
        solucao: "Confirma a entrada HDMI da televisão e verifica se o cabo está bem ligado. Experimenta outra entrada HDMI ou outro cabo compatível."
    },
    {
        plataforma: "Xbox",
        problema: "O comando não se liga à Xbox",
        termos: ["comando", "comando nao liga", "controle", "nao conecta comando"],
        solucao: "Verifica as pilhas ou carrega a bateria. Tenta emparelhar novamente o comando através do botão de ligação da consola e do comando."
    },
    {
        plataforma: "Xbox",
        problema: "Os downloads são lentos",
        termos: ["download lento", "downloads lentos", "internet lenta", "wifi lento"],
        solucao: "Testa a ligação à rede nas definições da Xbox, reinicia o router e experimenta uma ligação por cabo. Confirma também se existem problemas nos serviços online."
    },
    {
        plataforma: "Xbox",
        problema: "Os jogos bloqueiam ou fecham",
        termos: ["jogo bloqueia", "jogo fecha", "crasha", "crash", "jogo trava"],
        solucao: "Atualiza o jogo e a consola e reinicia a Xbox. Verifica se acontece apenas num jogo ou em vários. Se o problema persistir, consulta o suporte oficial."
    },
    {
        plataforma: "Xbox",
        problema: "A Xbox tem pouco espaço",
        termos: ["disco cheio", "sem espaco", "armazenamento cheio", "pouco espaco"],
        solucao: "Consulta a secção de armazenamento nas definições e desinstala jogos que já não utilizas. Antes de eliminar conteúdo, confirma se tens os dados importantes guardados."
    },
    {
        plataforma: "Xbox",
        problema: "A Xbox faz demasiado barulho",
        termos: ["barulho", "ventoinha", "faz ruido", "ruidoso"],
        solucao: "Verifica se a consola tem espaço para ventilação e se as saídas de ar estão desimpedidas. Se o ruído aumentar muito ou surgir de repente, contacta a assistência."
    }
];

