class Casa {
    constructor() {
        this.comodos = [];
    }

    adicionarComodo(comodo) {
        this.comodos.push(comodo);
    }

    ligarTodosEquipamentos() {
        this.comodos.forEach(comodo => comodo.ligarEquipamentos());
    }
}

class Comodo {
    constructor() {
        this.equipamentos = [];
    }

    adicionarEquipamento(equipamento) {
        this.equipamentos.push(equipamento);
    }

    ligarEquipamentos() {
        this.equipamentos.forEach(equipamento => equipamento.ligar());
    }
}

class Televisao {
    ligar() {
        console.log("Televisão ligada");
    }
}

class Fogao {
    ligar() {
        console.log("Fogão ligado");
    }
}

// nova classe
class ArCondicionado {
    ligar() {
        console.log("Ar condicionado ligado");
    }
}


const minhaCasa = new Casa();
const salaDeEstar = new Comodo();
salaDeEstar.adicionarEquipamento(new Televisao());
minhaCasa.adicionarComodo(salaDeEstar);

const cozinha = new Comodo();
cozinha.adicionarEquipamento(new Fogao());
minhaCasa.adicionarComodo(cozinha);

// nova instância ArCondicionado adicionada sem modificar o código existente
const quarto = new Comodo();
quarto.adicionarEquipamento(new ArCondicionado());
minhaCasa.adicionarComodo(quarto);

minhaCasa.ligarTodosEquipamentos();
