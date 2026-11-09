const produtos = [
  { nome: "Caderno", preco: 24.9, estoque: 12 },
  { nome: "Mochila", preco: 149.9, estoque: 3 },
  { nome: "Caneta azul", preco: 3.5, estoque: 40 },
  { nome: "Fone de ouvido", preco: 89.9, estoque: 0 },
  { nome: "Garrafa térmica", preco: 59.9, estoque: 7 },
  { nome: "Estojo", preco: 32, estoque: 5 },
];

const baratos = produtos.filter(p => p.preco < 50)

const nomes = produtos.map(n => n.nome)

const total = produtos.reduce((acc, n) => acc + n, 0)

const p1 = produtos.some(e => e.estoque = 0)

const p2 = produtos.every(c => c.preco < 200)

const p3 = produtos.find(m => m.preco > 50)