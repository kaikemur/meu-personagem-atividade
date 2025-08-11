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

