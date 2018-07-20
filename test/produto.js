
//process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Produto = require('../app/models/produtoModel');
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../config/server');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);


//Testa a inclusão de produtos
describe('/POST Produto', ()  => {
  it('Deve retornar status 201 para a criação do produto', (done) => {
    
    let produtoM = new Produto ({
      idProduto: mongoose.Schema.Types.ObjectId, 
      nome: "TestePOST",
      descricao: "TestePOST",
      preco: 500.50,
      maximoParcelas: 5
    })

    chai.request(app)
    .post('/api/v1/produtos')
    .send(produtoM)
    .end(function(err, res) {
      res.should.have.status(201);
      /*
      res.body.should.be.a('object');
      res.body.should.have.property('errors');
      res.body.errors.should.have.property('paginas');
      res.body.errors.paginas.should.have.property('kind').eql('required');
      */
      done();
    });
  });
});


//Testa a consulta de todos os produtos
describe('/GET Produto', () => {
  it('Deve retornar todos os produtos', (done) => {
    chai.request(app)
        .get('/api/v1/produtos')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          //res.body.length.should.be.eql(0); 
        done();
    });
  });
});

//Testa a consulta de um produto pelo ID
describe('/GET/:id produto', () => {
  it('Deve retornar um produto de acordo com o ID passado', (done) => {
    
    let produtoM = new Produto ({
     //idProduto: mongoose.Schema.Types.ObjectId, 
      nome: "TesteGETID",
      descricao: "TesteGETID",
      preco: 500.50,
      maximoParcelas: 5
    })

    produtoM.save((err, produto) => {
        chai.request(app)
        .get('/api/v1/produtos/' + produtoM.id)
        .send(produto)
        .end((err, res) => {
          
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('nome');
           // res.body.should.have.property('descricao');
            //res.body.should.have.property('preco');
            //res.body.should.have.property('maximoParcelas');
        
          done();
        });
    });
  });
});

//Testa atualização de produto
describe('/PUT/:id produto', () => {
  it('Deve atualizar um produto de acordo com o ID', (done) => {
   
    let produtoM = new Produto ({
      idProduto: mongoose.Schema.Types.ObjectId, 
      nome: "TestePUTID",
      descricao: "TestePUTID",
      preco: 500.50,
      maximoParcelas: 5
    })

    produtoM.save((err, produto) => {
        chai.request(app)
        .put('/api/v1/produtos/' + produtoM.id)
        .send({nome:'Nome atualizado'})
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          //res.body.should.have.property('message').eql('Book updated!');
          //res.body.book.should.have.property('year').eql(1950);
        done();
      });
    });
  });
});

//Testa a remoção de produtos
describe('/DELETE/:id produtos', () => {
  it('Deve deletar um produto de acordo com o ID passado', (done) => {
    
    let produtoM = new Produto ({
      idProduto: mongoose.Schema.Types.ObjectId, 
      nome: "TesteDELETEID",
      descricao: "TesteDELETEID",
      preco: 500.50,
      maximoParcelas: 5
    })

    produtoM.save((err, produto) => {
            chai.request(app)
            .delete('/api/v1/produtos/' + produtoM.id)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                //res.body.should.have.property('message').eql('Book successfully deleted!');
                //res.body.result.should.have.property('ok').eql(1);
                //res.body.result.should.have.property('n').eql(1);
              done();
          });
      });
  });
});



