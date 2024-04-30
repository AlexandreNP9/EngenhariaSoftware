class Equipamento {
    ligar() {
      console.log("Equipamento ligado");
    }
  }
  
  // subclasse Televisao, que herda de Equipamento
  class Televisao extends Equipamento {
    // método específico da Televisao para mudar de canal
    mudarCanal() {
      console.log("Canal mudado");
    }
  }
  
  // subclasse Fogao, que herda de Equipamento
  class Fogao extends Equipamento {
    // método específico do Fogao para acender o fogo
    acenderFogo() {
      console.log("Fogo aceso");
    }
  }
  
  // subclasse ArCondicionado, que herda de Equipamento
  class ArCondicionado extends Equipamento {
    // método específico do ArCondicionado para ajustar a temperatura
    ajustarTemperatura() {
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
      this.equipamentos.forEach(equipamento => equipamento.ligar());
    }
  }
  
  const salaDeEstar = new Comodo();
  salaDeEstar.adicionarEquipamento(new Televisao());
  
  const cozinha = new Comodo();
  cozinha.adicionarEquipamento(new Fogao());
  
  const quarto = new Comodo();
  quarto.adicionarEquipamento(new ArCondicionado());
  
  function ligarTodosEquipamentos(casa) {
    casa.forEach(comodo => comodo.ligarEquipamentos());
  }
  
  ligarTodosEquipamentos([salaDeEstar, cozinha, quarto]);
  