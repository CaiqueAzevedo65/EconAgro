import React, { useState } from "react";
import "../Styles/Carrinho.css";

const Carrinho = () => {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Produto 1", categoria: "Eletrônicos", preco: 120.99, quantidade: 1 },
    { id: 2, nome: "Produto 2", categoria: "Roupas", preco: 59.90, quantidade: 2 },
    { id: 3, nome: "Produto 3", categoria: "Acessórios", preco: 35.50, quantidade: 1 },
  ]);

  const [frete, setFrete] = useState(5);
  const [codigoPromocional, setCodigoPromocional] = useState("");

  const removerProduto = (id) => {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  };

  const alterarQuantidade = (id, quantidade) => {
    setProdutos(
      produtos.map((produto) =>
        produto.id === id ? { ...produto, quantidade: Math.max(1, quantidade) } : produto
      )
    );
  };

  const calcularTotal = () => {
    return produtos.reduce((acc, produto) => acc + produto.preco * produto.quantidade, 0) + frete;
  };

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal p-10 min-h-screen">
      <div className="container mx-auto container-carrinho">
        
        {/* Seção dos produtos */}
        <div className="produtos-container">
          <h1 className="text-2xl font-semibold border-b pb-4">Carrinho de Compras</h1>

          {/* Cabeçalho da lista de produtos */}
          <div className="produtos-header">
            <span className="w-2/5">Produto</span>
            <span className="w-1/5 text-center">Quantidade</span>
            <span className="w-1/5 text-center">Preço</span>
            <span className="w-1/5 text-center">Total</span>
          </div>

          {produtos.map((produto) => (
            <div key={produto.id} className="produto-item">
              
              {/* Imagem e detalhes */}
              <div className="flex items-center w-2/5">
                <img className="h-16 w-16 object-cover rounded-lg" src="https://via.placeholder.com/80" alt={produto.nome} />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{produto.nome}</h2>
                  <p className="text-gray-500 text-sm">{produto.categoria}</p>
                  <button onClick={() => removerProduto(produto.id)} className="text-red-500 text-sm mt-2 hover:underline">
                    Remover
                  </button>
                </div>
              </div>

              {/* Quantidade com botões "+" e "-" */}
              <div className="w-1/5 text-center">
                <div className="quantidade-container">
                  <button className="quantidade-btn" onClick={() => alterarQuantidade(produto.id, produto.quantidade - 1)}>-</button>
                  <input
                    className="quantidade-input"
                    type="number"
                    min="1"
                    value={produto.quantidade}
                    onChange={(e) => alterarQuantidade(produto.id, Number(e.target.value))}
                  />
                  <button className="quantidade-btn" onClick={() => alterarQuantidade(produto.id, produto.quantidade + 1)}>+</button>
                </div>
              </div>

              {/* Preço */}
              <div className="w-1/5 text-center">
                <span className="text-gray-700 font-semibold">${produto.preco.toFixed(2)}</span>
              </div>

              {/* Total */}
              <div className="w-1/5 text-center">
                <span className="text-gray-700 font-semibold">${(produto.preco * produto.quantidade).toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Seção do resumo */}
        <div className="resumo-container">
          <h1 className="font-semibold text-xl border-b pb-4">Resumo do Pedido</h1>

          <div className="flex justify-between mt-4 text-gray-700">
            <span>Itens ({produtos.length})</span>
            <span className="font-semibold">${calcularTotal().toFixed(2)}</span>
          </div>

          <div className="mt-4">
            <label className="font-medium text-sm text-gray-600">Frete</label>
            <select
              className="block w-full p-2 border rounded mt-1"
              onChange={(e) => setFrete(Number(e.target.value))}
            >
              <option value="5">Padrão - $5.00</option>
              <option value="10">Expresso - $10.00</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="font-medium text-sm text-gray-600">Código Promocional</label>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              placeholder="Digite o código"
              value={codigoPromocional}
              onChange={(e) => setCodigoPromocional(e.target.value)}
            />
            <button className="bg-red-500 text-white w-full mt-2 p-2 rounded hover:bg-red-600">Aplicar</button>
          </div>

          <button className="bg-indigo-500 text-white w-full mt-4 p-3 rounded hover:bg-indigo-600">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
