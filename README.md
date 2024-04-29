# EngenhariaSoftware
Repositório para atividades da disicplina de Engenharia de Software

Utilizei exemplos em JavaScript, com a temática de Casa, para exemplificar 4 princípios do SOLID+2.

single_responsibility_principle.js
    Esse princípio diz que uma classe deve ter apenas uma razão para mudar. Isso deixa o código mais fácil de entender, porque cada classe deve se preocupar em representar apenas um tipo de elemento.

    A função adicionarEquipamento, da classe Comodo, tem apenas a função de adicionar o equipamento à lista de equipamentos daquele cômodo.

    A função adicionarComodo, da classe Casa, tem apenas a função de adicionar o cômodo à lista de cômodos daquela casa.

    A função ligarTodosEquipamentos, da classe Casa, tem a função de percorrer casa cômodo daquela casa. Em casa loop, vai chamar a função ligarEquipamento daquele cômodo.

open_closed_principle.js
    Esse princípio diz que as entidades devem estar abertas para extensão, mas fechadas para alteração.

    Aqui foi adicionado uma classe ArCondicionado ao quarto, sem alterar o restante do código.

