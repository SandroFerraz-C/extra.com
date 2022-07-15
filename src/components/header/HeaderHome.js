import './HeaderHome.css';

function HeaderHome() {
  return (
    <div className="HeaderHome">
      <header className="HeaderHome-header">
        <div className="divStyle">
          <h1 className="h1Style">
            Clima de <span className="cupon">Cupom</span> Desconto de até
            <span className="percentage">45%</span>
            Use no carrinho: <span className="climate">noclima</span>
          </h1>
        </div>
        <div className="content">
          <div className="top">
            <a href="tel:+5540030363">Compre pelo telefone: 4003-0363</a>
            <a href="/">Atendimento</a>
            <a href="/">Vale Presente</a>
          </div>
          <div className="quite">
            <div className="soon">
              <a href="/">LOGO</a>
            </div>
            <div className="search">
              <input type="text" className="search"></input>
            </div>
            <div className="">
              <button className="">
                <img src=""></img>
              </button>
            </div>
            <div className="login">
              <p>Entre ou Cadastre-se</p>
              <p>Para ver seus pedidos</p>
            </div>
            <div className="cart">
              <p>Meu Carrinho</p>
            </div>
          </div>
        </div>
      </header>
      <footer>
        <div className="departments">
          <p>Departamentos</p>
          <a href="#">Mercado</a>
          <a href="">Baixe o APP</a>
          <a href="">Smartphones</a>
          <a href="">Eletricodomésticos</a>
          <a href="">TV e Vídeo</a>
          <a href="">Venda Seus Produtos</a>
        </div>
      </footer>
    </div>
  );
}

export default HeaderHome;
