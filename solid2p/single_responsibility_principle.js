// classe casa com lista de cômodos
class Casa {
  constructor() {
    this.comodos = [];
  }

  // método adicionar cômodo à casa
  adicionarComodo(comodo) {
    this.comodos.push(comodo);
  }

  // método ligar equipamentos de todos os cômodos da casa
  ligarTodosEquipamentos() {
    this.comodos.forEach(comodo => comodo.ligarEquipamentos());
  }
}

// classe comodo com lista de equipamentos
class Comodo {
  constructor() {
    this.equipamentos = [];
  }

  // método adicionar equipamento ao cômodo
  adicionarEquipamento(equipamento) {
    this.equipamentos.push(equipamento);
  }

  // método ligar todos os equipamentos do cômodo
  ligarEquipamentos() {
    this.equipamentos.forEach(equipamento => equipamento.ligar());
  }
}

// classe televisao
class Televisao {
  ligar() {
    console.log("Televisão ligada");
  }
}

// classe fogao
class Fogao {
  ligar() {
    console.log("Fogão ligado");
  }
}


const minhaCasa = new Casa();
const salaDeEstar = new Comodo();
salaDeEstar.adicionarEquipamento(new Televisao());    // a função adicionarEquipamento utiliza o príncípio de responsabilidade única
minhaCasa.adicionarComodo(salaDeEstar);               // a função adicionarComodo utiliza o príncípio de responsabilidade única

const cozinha = new Comodo();
cozinha.adicionarEquipamento(new Fogao());
minhaCasa.adicionarComodo(cozinha);

minhaCasa.ligarTodosEquipamentos();                   // a função ligarTodosEquipamentos também utiliza o príncípio de responsabilidade única, uma vez que seu escopo trabalha com foreach
