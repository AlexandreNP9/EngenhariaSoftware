// interface para um dispositivo que pode ser ligado
class Ligavel {
    ligar() { }
}

// interface para um dispositivo que pode ser ajustado
class Ajustavel {
    ajustar() { }
}

class Equipamento { }

class Televisao extends Equipamento {
    ligar() {
        console.log("Televisão ligada");
    }
}

class ArCondicionado extends Equipamento {
    ligar() {
        console.log("Ar condicionado ligado");
    }

    ajustar() {
        console.log("Temperatura ajustada");
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
        this.equipamentos.forEach(equipamento => {
            if (equipamento instanceof Ligavel) {
                equipamento.ligar();
            }
        });
    }
}

const salaDeEstar = new Comodo();
salaDeEstar.adicionarEquipamento(new Televisao());

const quarto = new Comodo();
quarto.adicionarEquipamento(new ArCondicionado());

function ligarTodosEquipamentos(casa) {
    casa.forEach(comodo => comodo.ligarEquipamentos());
}

ligarTodosEquipamentos([salaDeEstar, quarto]);
