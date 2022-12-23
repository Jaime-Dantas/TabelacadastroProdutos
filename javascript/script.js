//criação da classe
class Produto {

  // Metodo ou função
  constructor(){
    this.id = 1;
    this.arrayProdutos = [];
  }

  salvar(){
  // Quando o usuario clicar em cadastrar o comando this vai chamar a função.
    let produto = this.lerDados();

    if(this.validacaoCampos(produto)){
      this.adicionar(produto);
      
    }

    this.listaTabela();
    console.log(this.arrayProdutos);
    
  }

  listaTabela(){
    let tbody = document.getElementById('tbody');
    tbody.innerText = '';
    //length é usado apra sabermos a quantidade de registros dentro do array. depois é só incrementar o i++
    for(let i=0; i < this.arrayProdutos.length; i++){
      //insertRow() Assim como o nome diz, essa função é ultilizada para inserir uma nova linha na tabela. 
      let tr = tbody.insertRow();

      //Agora inserimos as colunos com insertCell()
      let td_id = tr.insertCell();
      let td_produto = tr.insertCell();
      let td_valor = tr.insertCell();
      let td_acoes = tr.insertCell();

      td_id.innerText = this.arrayProdutos[i].id;
      td_produto.innerText = this.arrayProdutos[i].nomeProduto;
      td_valor.innerText = this.arrayProdutos[i].preco;
    }
  }

  adicionar(produto){
    //a função push adiciona um ou mais elementos no final de um array e retornar um novo complemento desse Array.
    // Resumindo ele vai adicionar os campos de acordo com a ordem do Array.
    this.arrayProdutos.push(produto);
    this.id++;
  }

  lerDados(){
    //O metodo irá ler os campos e vai retornar tudo para o cadastrar e listatabela.
  
      //Ao criar uma váriavel que recebe chaves estamos afirmando que essa váriavel será um objeto.
      let produto = {}
  
      produto.id = this.id;
      produto.nomeProduto = document.getElementById('produto').value;
      produto.preco = document.getElementById('preco').value;
  
      return produto;
    }

  cancelar(){
    
  }

  

  validacaoCampos(produto){
    let msg = '';

    if(produto.nomeProduto == ''){
      msg += '-- Informe o nome do produto -- \n'
    }

    if(produto.preco == ''){
      msg += '-- Informe o valor do produto -- \n'
    }

    if(msg != ''){
      alert(msg);
      return false;
    }

    return true;
  }

  excluir(){
    alert('Excluido com sucesso!');
  }

}

var produto = new Produto();