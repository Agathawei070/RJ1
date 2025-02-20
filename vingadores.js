const feiticeiraEscarlate = {
    nome: "Wanda Maximoff",
    codinome: "Feiticeira Escarlate",
    armaPrincipal: "Magia do Caos",
    armaSecundaria: "Telecinese e controle mental",
    velocidade: 40,
    forca: 100,
    resistencia: 80,
    descrição: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Nivel de força: " + this.forca + "\n"
            + "Nivel de velocidade: " + this.velocidade + "\n"
            + "Nivel de resistencia: " + this.resistencia 
    }
}

const thor = {
    nome: "Thor",
    codinome: "Thor",
    armaPrincipal: "Martelo",
    armaSecundaria: "Machado",
    velocidade: 80,
    forca: 100,
    resistencia: 100,
    descrição: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Nivel de força: " + this.forca + "\n"
            + "Nivel de velocidade: " + this.velocidade + "\n"
            + "Nivel de resistencia: " + this.resistencia 
    }
}

const homemDeFerro = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura",
    armaSecundaria: "Repulsores de energia e lasers",
    velocidade: 85,
    forca: 80,
    resistencia: 85,
    descrição: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Nivel de força: " + this.forca + "\n"
            + "Nivel de velocidade: " + this.velocidade + "\n"
            + "Nivel de resistencia: " + this.resistencia 
    }
}

const homemAranha = {
    nome: "Peter Parker",
    codinome: "Homem-Aranha",
    armaPrincipal: "Lançadores de teia",
    armaSecundaria: "Sentido-Aranha",
    velocidade: 75,
    forca: 75,
    resistencia: 70,
    descrição: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Nivel de força: " + this.forca + "\n"
            + "Nivel de velocidade: " + this.velocidade + "\n"
            + "Nivel de resistencia: " + this.resistencia 
    }
}

const doutorEstranho = {
    nome: "Stephen Strange",
    codinome: "Doutor Estranho",
    armaPrincipal: "Olho de Agamotto",
    armaSecundaria: "Manto da Levitação e Anéis Místicos",
    velocidade: 30,
    forca: 80,
    resistencia: 95,
    descrição: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Nivel de força: " + this.forca + "\n"
            + "Nivel de velocidade: " + this.velocidade + "\n"
            + "Nivel de resistencia: " + this.resistencia 
    }
}


const capitaMarvel = {
    nome: "Carol Danvers",
    codinome: "Capitã Marvel",
    armaPrincipal: "Energia cósmica ",
    armaSecundaria: "Superforça e voo supersônico",
    velocidade: 100,
    forca: 95,
    resistencia: 98,
    descrição: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Nivel de força: " + this.forca + "\n"
            + "Nivel de velocidade: " + this.velocidade + "\n"
            + "Nivel de resistencia: " + this.resistencia 
    }
}

const Thanos = {
    nome: "Thanos",
    codinome: "Thanos",
    armaPrincipal: "Manopla do Infinito ",
    armaSecundaria: "Espada dupla de Vibranium e sua própria força brutal",
    velocidade: 60,
    forca: 100,
    resistencia: 100,
    descrição: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Nivel de força: " + this.forca + "\n"
            + "Nivel de velocidade: " + this.velocidade + "\n"
            + "Nivel de resistencia: " + this.resistencia 
    }
}

const personagens = [
    feiticeiraEscarlate,
    thor,
    homemDeFerro,
    homemAranha,
    doutorEstranho,
    capitaMarvel,
    Thanos
];

function encontrarVencedor(atributo) {
    return personagens.reduce((vencedor, personagem) =>
        personagem[atributo] > vencedor[atributo] ? personagem : vencedor
    );
}

console.log("🔹 COMPARAÇÃO ENTRE OS PERSONAGENS 🔹\n");

personagens.forEach(personagem => {
    console.log(personagem.descrição() + "\n");
});

const vencedorVelocidade = encontrarVencedor("velocidade");
const vencedorForca = encontrarVencedor("forca");
const vencedorResistencia = encontrarVencedor("resistencia");

console.log(` Vencedor em Velocidade: ${vencedorVelocidade.codinome} (${vencedorVelocidade.velocidade})`);
console.log(` Vencedor em Força: ${vencedorForca.codinome} (${vencedorForca.forca})`);
console.log(` Vencedor em Resistência: ${vencedorResistencia.codinome} (${vencedorResistencia.resistencia})`);



