// Construtor - Protótipo de Objeto
function Product(name, sto, ram, price, qty, category) {
  this.name = name;
  this.sto = sto;
  this.ram = ram;
  this.price = price;
  this.qty = qty;
  this.category = category;
}

const p1 = new Product("iPhone", 256, 16, 5000, 10, "Celular");
const p2 = new Product("iPad", 512, 16, 8000, 20, "Tablet");
const p3 = new Product("Macbook", 1024, 24, 15000, 30, "Notebook");
const p4 = new Product("iPhone Pro Max", 256, 16, 7000, 15, "Celular");
const p5 = new Product("iPad Pro", 512, 16, 10000, 25, "Tablet");
const p6 = new Product("Macbook Pro", 1024, 24, 25000, 35, "Notebook");

const estoque = [
  { ...p1 },
  { ...p2 },
  { ...p3 },
  { ...p4 },
  { ...p5 },
  { ...p6 },
];

/* DESAFIO 1

  a) Valor total de todos os produtos em estoque
  b) Ordene os produtos por nome (crescente/descrescente)
  c) Ordene os produtos por preço (crescente/descrescente)
  d) Filtre produtos de acordo uma categoria

*/

//   a) Valor total de todos os produtos em estoque
const valorTotal = estoque
    .reduce((valor, p) => valor + p.price * p.qty, 0)
    .toFixed(2);
console.log(`Valor total: R$ ${valorTotal}`)
  // b) Ordene os produtos por nome (crescente/descrescente)
let NomeProdutoCre = estoque.toSorted((a, b)=>(a.name > b.name) - (a.name < b.name));
let NomeProdutoDec = estoque.toSorted((a, b)=>(a.name < b.name) - (a.name > b.name));
console.log(NomeProdutoCre);
console.log(NomeProdutoDec);
  // c) Ordene os produtos por preço (crescente/descrescente)
let PrecoProdutoCre = estoque.toSorted((a, b)=>a.price - b.price);
let PrecoProdutoDec = estoque.toSorted((a, b)=>b.price - a.price);

  // d) Filtre produtos de acordo uma categoria

let ProdutoFiltCateg=estoque.filter((p) => p.category === 'Celular');
console.log(ProdutoFiltCateg);