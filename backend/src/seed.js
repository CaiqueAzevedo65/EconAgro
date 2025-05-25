const Product = require('./models/Product');
const sequelize = require('./database');

const products = [
  // Carnes
  {
    name: 'Filé Mignon 1kg',
    price: 'R$ 89,90',
    img: '/images/carnes/file_mignon.jpg',
    category: 'Carnes',
    stock: 50
  },
  {
    name: 'Alcatra 1kg',
    price: 'R$ 49,90',
    img: '/images/carnes/alcatra.jpg',
    category: 'Carnes',
    stock: 30
  },
  {
    name: 'Picanha 1kg',
    price: 'R$ 99,90',
    img: '/images/carnes/picanha.jpg',
    category: 'Carnes',
    stock: 25
  },
  
  // Ovos
  {
    name: 'Ovos Brancos 30 unidades',
    price: 'R$ 24,90',
    img: '/images/ovos/ovos_brancos.png',
    category: 'Ovos',
    stock: 100
  },
  {
    name: 'Ovos Caipira 30 unidades',
    price: 'R$ 34,90',
    img: '/images/ovos/ovos_caipira.png',
    category: 'Ovos',
    stock: 80
  },
  
  // Laticínios
  {
    name: 'Queijo Minas Frescal 1kg',
    price: 'R$ 34,90',
    img: '/images/laticinios/queijo_minas.jpg',
    category: 'Laticínios',
    stock: 40
  },
  {
    name: 'Mussarela 1kg',
    price: 'R$ 39,90',
    img: '/images/laticinios/mussarela.jpg',
    category: 'Laticínios',
    stock: 35
  },
  
  // Hortifruti
  {
    name: 'Alface Crespa',
    price: 'R$ 3,90',
    img: '/images/hortifruti/alface.jpg',
    category: 'Hortifruti',
    stock: 70
  },
  {
    name: 'Tomate 1kg',
    price: 'R$ 7,90',
    img: '/images/hortifruti/tomate.jpg',
    category: 'Hortifruti',
    stock: 60
  },
  {
    name: 'Banana Prata 1kg',
    price: 'R$ 5,90',
    img: '/images/hortifruti/banana.jpg',
    category: 'Hortifruti',
    stock: 80
  },
  {
    name: 'Maçã 1kg',
    price: 'R$ 8,90',
    img: '/images/hortifruti/maca.jpg',
    category: 'Hortifruti',
    stock: 50
  }
];

async function seed() {
  try {
    await sequelize.sync({ force: true });
    await Product.bulkCreate(products);
    console.log('Banco de dados populado com sucesso!');
    
    // Listar todos os produtos cadastrados para verificação
    const allProducts = await Product.findAll();
    console.log('Produtos cadastrados:', JSON.stringify(allProducts, null, 2));
    
    process.exit(0);
  } catch (error) {
    console.error('Erro ao popular o banco de dados:', error);
    process.exit(1);
  }
}

seed();