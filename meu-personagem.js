// 1.🔹 Criação das Variáveis Principais
let nome = "ziegfried";
let classe = "guerreiro" ;
let nivel = 16;
let vida = 130;
let moedas = 1000;
let xp = 200;
let aura = 150;


// 2. 🔸 Definição de Constantes Mágicas

const nomeArma = "balmung";
let DANOBASE = 100 ;
let nomeArmadura= "fafinir" ;
let defesaBase = 500;

// 3. ⚙️ Aplicação de Operadores de Atribuição

let pocao = 40;
let valorDaPocao = 30;
xp += 150 ;
moedas -+ valorDaPocao ;
vida += pocao

// 4.➕ Cálculo de Atributos Finais
let ataqueTotal = nivel + DANOBASE;
let defesaTotal = defesaBase + (nivel / 2);

// 5. 🔐 Avaliação de Prontidão com Operadores Lógicos

let vidaSuficiente = vida > 70
let ataqueForte = ataqueTotal > 60
let nivelAvancado = nivel >= 10
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado)


// 6.📜 Geração da Lore do Personagem
console.log(`🧾 LORE DO HERÓI:${nome} `);
console.log(``);
console.log(`${nome}, o gurreiro de germania, explora e desvenda as ruínas criptografadas do Reino de Algorithmi`);
console.log(`Portando a espada matadora de cyberdragões ${nomeArma}, ele usa o corte undefined contra seus adversarios e inimigos .`);
console.log(`Com nível ${nivel} e um ataque total de ${ataqueTotal}, é temido por todos os reinos e ate mesmo pelos virus mais antigos.`);
console.log(`Seu vigor é, impulsionado pela armadura antiga ${nomeArmadura}, que  atinge ${defesaTotal} pontos de defesa total,capas de defender quase todos os tipos de ataques fisicos .`);
console.log(`Após uma  intensa jornada de treinamento ele , acumulou ${xp} de XP e carrega consigo ${moedas} moedas, pronto para negociações e subornos nas guildas de byte e na prisao de ssd  .`);
console.log(`${nome }Restaurado com ${vida} pontos de vida,apos uma intensa luta acaba por chegar na taverna de terabyte em uma cidade proxima .`);
console.log(`Vida suficiente? ${vidaSuficiente}| Ataque forte? ${ataqueForte} | Nível avançado? ${nivelAvancado}`);
console.log(`Pode enfrentar o Guardião? ${podeEnfrentarGuardiao} — a batalha final se aproxima, e o destino está sendo compilado.`);

//nivel 2 da atividade


//1🔗 Resgate do Nível 

// === CONTINUAÇÃO DA SUA JORNADA DO NÍVEL 1 ===




// Novos atributos para batalha
let forca = 50;
let defesa = 45;
let agilidade = 79;
let combatesVencidos = 0;

// Estado atual da história (continue de onde parou no Nível 1)
let localAtual = "taverna de tarabyte ";
let missaoAtual = "derrotar o mago dos keyloggers";
let comerciante = "aurora B.D"
let inimigo = "mago dos keyloggers";

// 2 📖 Estrutura Narrativa Obrigatória
console.log(`-----------------------------------------------------------------`);

//PROLOGO
console.log(`anteriormente em Algorithmi ${nome} vai a ${localAtual} para se refugiar mas acaba encotrando com um homen que ele ainda não conhecia`);
console.log(`-----------------------------------------------------------------`);

// Capítulo 1 - 🚪chegada inesperada
console.log(` Capítulo 1 - 🚪chegada inesperada`);

//verificação de identidade
if (nivel >= 10) {
    console.log(`você pode entrar na ${localAtual} `);
    
}
//comprando poção  de resistencia
if (moedas >= 100) {;
    let pocao = "poção de resistencia";
    let valorDaPocaoResistencia = 100 ;

    moedas-=valorDaPocaoResistencia;
    console.log(`voce podera comprar a ${pocao} e sobrara ${moedas} moedas`);
}
//verificação de classe 
if(classe ==="guerreiro"){
    let habilidade = "corte de binarios"
    console.log(`voce podera aprender a ${habilidade}`);
}

console.log(`-----------------------------------------------------------------`);

// capitulo 2 - 🤺luta inesperada

console.log(`capitulo 2 - 🤺luta inesperada`);


if(defesaBase >=300 ){
    defesaBase -= 100;
    console.log(`${nome} entra em luta com um virus mas consegue se defender de um dos seus ataque, mas sua armadura acaba quebrando uma parte o fazendo ficar com ${defesaBase} `);

}else {
    defesaBase -= 300;
    console.log(`se a defesa de ${nome} não for o suficiente sua armadura quebrara completamenta fazendo o ficar com ${defesaBase} reduzida devido a perca de sua armadura`);
    
}

if(xp >=100 ){
    console.log(`${nome} consegue upar de nivel devido a intesidade da batalha e suas habilidades despertam derrotando o inimigo`);
    nivel ++;
    defesaBase+=50;
    xp = 0;
    ataqueTotal+=50;
}else{
    console.log(`${nome} nessecita de mais experiencia antes de upar para o proximo nivel mas mesmo assim derrota seu inimigo porem fica em estado grave`);
    
}
console.log(`-----------------------------------------------------------------`);

// capitulo 3 - ⚔️ Batalha final
console.log(`capitulo 3 - ⚔️ Batalha final`);

let poderinimigo = 125;

//estrategia de combate de acordo com situação
if(vidaSuficiente<=125){
    console.log(`${nome} em uma tentativa dessesperada`);
    console.log(`usa seu ataque final`);
    poderinimigo -= (ataqueTotal * 2)
    console.log(`deixando o ${inimigo} acabado e finalmente cumprindo seu objetivo ` );
}else if (forca>=50 && classe=== "guerreiro"){
    console.log(`embui sua espada ${nomeArma} com aura para um ataque definitivo`);
    console.log(`corte final`);
    poderinimigo-=30;
    aura -=aura;
    console.log(`assim morrendo junto ao ${inimigo} mas finalmente cumprindo seu objetivo`);
    vida -= vida;
}else if(moedas>=200 &&  agilidade>=40){
    console.log(`${nome} suborna um dos lacaios do ${inimigo} e foge `);
    poderinimigo-=agilidade;
}else
console.log(`${nome} falha em sua missao e acaba nao derrotando o ${inimigo} e presso forçado a trabalhar para ele`);
console.log("📜 === CONTINUAÇÃO DA JORNADA DE " + nome + " ===");
console.log("");

// PRÓLOGO - Conexão com o Nível 1
console.log("Após os eventos do " + localAtual + ", nosso herói " + nome);
console.log("da classe " + classe + " se depara com um novo desafio...");
console.log("");

// [Aqui você implementa os 3 capítulos com os conceitos das etapas anteriores]

// EPÍLOGO - Resultado final
if (poderinimigo <= 0) {
    console.log("🎉 VITÓRIA ÉPICA! " + nome + " triunfa na sua batalha final!");
    xp += 100;
    combatesVencidos++;
    console.log("A lenda de " + nome + " cresce...");
} else {
    console.log("⚔️ A batalha foi árdua, mas " + nome + " sobrevive para lutar outro dia!");
}

console.log("");
console.log("🏁 FIM DO CAPÍTULO - Aguarde o próximo nível da aventura!");
console.log("");

// capitulo 3 - ⚔️ Batalha final
console.log(`capitulo 3 - ⚔️ Batalha final`);

//estrategia de combate de acordo com situação
if(vidaSuficiente<=125){
    console.log(`${nome} em uma tentativa dessesperada`);
    console.log(`usa seu ataque final`);
    poderinimigo -= (ataqueTotal * 2)
    console.log(`deixando o ${inimigo} acabado e finalmente cumprindo seu objetivo ` );
}else if (forca>=50 && classe=== "guerreiro"){
    console.log(`embui sua espada ${nomeArma} com aura para um ataque definitivo`);
    console.log(`corte final`);
    poderinimigo-=30;
    aura -=aura;
    console.log(`assim morrendo junto ao ${inimigo} mas finalmente cumprindo seu objetivo`);
    vida -= vida;
}else if(moedas>=200 &&  agilidade>=40){
    console.log(`${nome} suborna um dos lacaios do ${inimigo} e foge `);
    poderinimigo-=agilidade;
}else
console.log(`${nome} falha em sua missao e acaba nao derrotando o ${inimigo} e presso forçado a trabalhar para ele`);
console.log("📜 === CONTINUAÇÃO DA JORNADA DE " + nome + " ===");
console.log("");

// PRÓLOGO - Conexão com o Nível 1
console.log("Após os eventos do " + localAtual + ", nosso herói " + nome);
console.log("da classe " + classe + " se depara com um novo desafio...");
console.log("");

// [Aqui você implementa os 3 capítulos com os conceitos das etapas anteriores]

// EPÍLOGO - Resultado final
if (poderinimigo <= 0) {
    console.log("🎉 VITÓRIA ÉPICA! " + nome + " triunfa na sua batalha final!");
    xp += 100;
    combatesVencidos++;
    console.log("A lenda de " + nome + " cresce...");
} else {
    console.log("⚔️ A batalha foi árdua, mas " + nome + " sobrevive para lutar outro dia!");
}

console.log("");
console.log("🏁 FIM DO CAPÍTULO - Aguarde o próximo nível da aventura!");
console.log("");

// === CONTINUAÇÃO DA SAGA ÉPICA - NÍVEL 3 ===
// Mantenha seu personagem dos níveis anteriores e adicione:

// === CONTINUAÇÃO DA SAGA ÉPICA - NÍVEL 3 ===
// Mantenha seu personagem dos níveis anteriores e adicione:


let vidaAtual = 120;
let vidaMaxima = 120;
let experiencia = 200;
let ouro = 150;

// === NOVOS ELEMENTOS PARA O CASTELO DOS ARRAYS ===
// Inventário mágico - primeira coleção arcana
let inventario = ["Poção de Vida", "Espada  amaldoçoada", "Armadura de dragão"];
let aliados = ["Mago mogi", "paladino arthur", "Arqueiro maomao","berserk guts"];
let inimigosEncontrados = ["orc Sombrio", "goblin menor", "Dragão alen"];
let areasCaverna = ["fonte das string", "catacumbas dos virus", "espelhotemas "];
let tesouroColetado = [];
let caverna = "caverna dos arrays"

console.log(`🕳 ===  ${nome} ADENTRA O ${caverna} ===`);
console.log(`Após as vitórias dos níveis anteriores, nosso herói${nome} chegou a caverna sombria...`);
console.log(`Inventário inicial: ${inventario.length}`);

// === CAPÍTULO 1: DESCOBERTA DAS COLEÇÕES ARCANAS ===
console.log("");
console.log("🗝️ CAPÍTULO 1: Os Baús perdidos da caverna sombria");

// 3.5.1. Declaração e inicialização
let objetosEncontradas = ["Cura Maior", "elmo de chifres", "capa da Invisibilidade"];
let armadilhasAtiradas = []; // Array vazio - será preenchido na aventura

// 3.5.2. Acesso e modificação de elementos
console.log(` 🥄Primeiros objetos encontrada: ${objetosEncontradas[0]}`);
console.log(`❇ Total de objetos mágicas${ objetosEncontradas.length}`);

// Modificando elemento específico
inventario[0] = "espada encantada"; // Upgrade na espada !
console.log(`✨ ${nome} aprimorou uma arma!`);

// 3.5.3. Métodos de array fundamentais
inventario.push("Anel de Proteção"); // Adiciona no final
console.log(`⛑ Novo item encontrado! Inventário: ${inventario}`);
let itemRemovido = inventario.pop(); // Remove do final
console.log("📤 Item removido: " + itemRemovido);
console.log("🎒 Inventário atual: " + inventario);

// === CAPÍTULO 2:  EXPLORAÇÃO AO DESCONHECIDO===
console.log("");
console.log("⚔️ CAPÍTULO 2: Explorando as catacumbas de virus");

// Explorando cada buraco da caverna usando for tradicional
console.log("🗺️ Começando exploração das " + areasCaverna.length + "Das 3 passagens ...");

for (let i = 0; i < areasCaverna.length; i++) {
console.log("🕳️ passagen " + (i + 1) + ": " + areasCaverna[i]);

// Lógica diferente para cada sala baseada no índice
if (i === 0) {
console.log(`📚  ${nome}  encontra escrituras perdidas!`);
experiencia += 50;
} else if (i === 1) {
console.log("🗺️  "+ nome +" acha um mapa perdido da caverna !");
tesouroColetado.push("mapa velho");
} else {
console.log("🗿estalactites começam a cair em " + nome + "!");
vidaAtual -= 10; // Pequeno dano de queda por objetos
}
}

console.log("📊 Exploração completa! XP: " + experiencia + " | Vida: " + vidaAtual)

// === CAPÍTULO 3: A UNIÃO DOS ALIADOS ===
console.log("");
console.log("🤝 CAPÍTULO 3: Reunindo os Aliados Arcanos");

// Recrutando aliados com for tradicional
console.log("🏹 " + nome + " convoca seus aliados para a batalha derradeira que decidira o final dessa historia:");

for (let i = 0; i < aliados.length; i++) {
let aliado = aliados[i];
console.log("⚡ Aliado " + (i + 1) + ": " + aliado + " se junta à missão!");

// Cada posição no array determina habilidade especial
if (i === 0) { // Primeiro aliado - Líder mágico
console.log("🔮 Como líder mágico, " + aliado + " multiplica o poder da equipe e cura seus aliados!");
ouro += 50;
vida+=10;
} else if (i === 1) { // Segundo aliado - Defensor
console.log("🛡️ Como suporte principal, " + aliado + " fortalece a resistência !");
vidaMaxima += 30;
} else { // Demais aliados - Especialistas
console.log("🏹 Como especialista em tiros, " + aliado + " aprimora as táticas de combate e visualiza os inimigos mais longe!");
experiencia += 40;
}
}

console.log("🎖️ Equipe completa! Ouro: " + ouro + " | Vida máxima: " + vidaMaxima);

// === CAPÍTULO 4: A BATALHA FINAL DOS ARRAYS ===
console.log("");
console.log("🐉 CAPÍTULO 4: Confronto com as Criaturas da "+ caverna  +" ");

// Sistema de batalha usando arrays e for tradicional
let inimigosBatalha = ["golem de minerais", "magos das trevas", "labubu dos Arrays"];
let danoRecebido = [];

console.log(`💀  ${nome }batalha contra seus inimigos ${inimigosBatalha.length} inimigos vorazes!`);

// Batalha usando for tradicional para controle preciso
for (let i = 0; i < inimigosBatalha.length; i++) {
let inimigo = inimigosBatalha[i];
let dano = Math.floor(Math.random() * 30) + 10; // Dano entre 10 e 39

console.log(`⚔️ Rodada ${(i + 1)} - duelando com: ${inimigo}`);
console.log(`💥  ${nome} causa ${ dano} de dano!`);

danoRecebido.push(dano); // Armazena dano para cálculos posteriores

// Lógica especial para cada rodada baseada no índice
if (i === 0) {
console.log("💎 Primeira vitória! minerais de todos os tipos concedem diferentes buffs!");
tesouroColetado.push("amontoado de minerais");
} else if (i === 1) {
console.log("🌑 Segunda batalha! As sombras drenam energia e diminuem o dano da equipe, mas " + nome + " resiste!");
vidaAtual -= 15;
dano -= 10;
} else {
console.log("🔥 Batalha final! O labubu recua! Vitória épica alcançada!");
experiencia += 100;
tesouroColetado.push("pelucia misteriosa");
}
}

// Calculando estatísticas da batalha usando for tradicional

let danoTotal = 0;
for (let i = 0; i < danoRecebido.length; i++) {
danoTotal += danoRecebido[i];
console.log("📊 Rodada " + (i + 1) + " - Dano: " + danoRecebido[i]);
}

console.log("⚡ Dano total causado: " + danoTotal);
console.log("🏆 Tesouros coletados: " + tesouroColetado.length + " itens lendarios mas provavelmente inuteis!");

// === EPÍLOGO: O MESTRE DOS ARRAYS ===
console.log("");
console.log("👑 === EPÍLOGO: " + nome + " - CONQUISTADOR DO CASTELO ===");

// Estatísticas finais da jornada
console.log("📈 Estatísticas Finais da Aventura:");
console.log("• Nível alcançado: " + nivel);
console.log("• Experiência total: " + experiencia);
console.log("• Vida restante: " + vidaAtual + "/" + vidaMaxima);
console.log("• Ouro acumulado: " + ouro);
console.log("• Itens no inventário: " + inventario.length);
console.log("• Aliados conquistados: " + aliados.length);
console.log("• Tesouros épicos: " + tesouroColetado.length);

// === ADICIONE SUAS 10+ LINHAS ÉPICAS DE CONTINUAÇÃO AQUI ===
console.log("");
console.log("🌟 A LENDA AINDA VIVE...");
console.log("Após desbravar a "+ caverna+", " + nome + "viu que estava muito mais forta.");
console.log("apos sair da caverna ele decide ver os 🎒espolios de sua gloriosa aventura .");
console.log(`quando ele pega em suas mãos o boneco de labubu aparece um 🧞genio falando que ele tinha 2 desejos`);
console.log(`${nome} pede que todos os seus companheiros e ele consigam o glorioso 🗒️metodo dos arrays`);
console.log(`E seu ultimo desejo ele pediu que queria finalmente relizar seu maior sonho em vida ❤️ `);
console.log(`DESENHAR ONIBÚS NO RIO DE JANEIRO.🖼️🚌`);
console.log(`🗺️ E assima a historia de heroí que provou que ele não so mais um no mundo acaba mas não fique triste que acabou mas sim que aconteceu.`);

console.log("");
console.log("");
console.log("🎯 FIM DO NÍVEL 3 | AGUARDE FUTURAS AVENTURAS NA ACADEMIA DOS CÓDIGOS! *_* 🎯");