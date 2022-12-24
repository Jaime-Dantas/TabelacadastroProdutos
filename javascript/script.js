//criação da classe
class Produto {

  // Metodo ou função
  constructor(){
    this.id = 1;
    this.arrayProdutos = [];
    this.editId = null;
  }

  salvar(){
  // Quando o usuario clicar em cadastrar o comando this vai chamar a função.
    let produto = this.lerDados();

    if(this.validacaoCampos(produto)){
      if(this.editId == null){
        this.adicionar(produto);
      } else {
        this.atualizar(this.editId, produto);
       
      }
      document.getElementById('btn1').innerText = 'Cadastrar';
      
    }


    this.listaTabela();
    this.cancelar();
    
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

      td_id.classList.add('center');

      //adicionando os botões das ações excluir e editar

      let imgEdit = document.createElement('img');
      imgEdit.src = 'img/editar.png';
      imgEdit.setAttribute("onclick","produto.editarProd("+ JSON.stringify(this.arrayProdutos[i]) +")");
      
      let imgDelet = document.createElement('img');
      imgDelet.src = 'img/apagar.png';
      imgDelet.setAttribute("onclick","produto.deletar("+ this.arrayProdutos[i].id +")");

      td_acoes.appendChild(imgEdit);
      td_acoes.appendChild(imgDelet);

      console.log(this.arrayProdutos);
    }
  }

  editarProd(dados){
    this.editId = dados.id;
    
    document.getElementById('produto').value = dados.nomeProduto;
    document.getElementById('preco').value = dados.preco;

    document.getElementById('btn1').innerText = 'Atualizar';
  }

  atualizar(id, produto){
    for(let i=0; i<this.arrayProdutos.length; i++){
      if(this.arrayProdutos[i].id == id){
        this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
        this.arrayProdutos[i].preco = produto.preco;

      }
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
    document.getElementById('produto').value = '';
    document.getElementById('preco').value = '';
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

  deletar(id){
    let tbody = document.getElementById('tbody');

    for(let i = 0; i < this.arrayProdutos.length; i++){
       if(this.arrayProdutos[i].id == id){
          this.arrayProdutos.splice(i, 1);
          tbody.deleteRow(i);
       }
    }
    console.log(this.arrayProdutos);
  }

}

var produto = new Produto();