import styled from "styled-components";
const divStyle = {
  backgroundColor: "#01526d",
  display: "inline-block",
  width: "100%",
};

const h1Style = {
  margin: "5px",
  fontSize: "30px",
  color: "#ffffff",
  textAlign: "center",
  fontWeight: "500",
};

const cupom = {
  textTransform: "uppercase",
  color: "#fce700",
  marginLeft: "20px",
  marginRight: "60px",
  fontWeight: "700",
  fontSize: "2.5rem",
};

const percentage = {
  color: "#fce700",
  marginLeft: "10px",
  marginRight: "20px",
  fontSize: "2.5rem",
};
const climate = {
  textTransform: "uppercase",
  color: "#fce700",
  marginLeft: "20px",
  marginRight: "60px",
  fontWeight: "700",
  fontSize: "2.5rem",
};

function HeaderHome() {
  return (
    <div className="HeaderHome">
      <header className="HeaderHome-header">
        <div className="cupon" style={divStyle}>
          <h1 style={h1Style}>
            Clima de <span style={cupom}>Cupom</span> Desconto de até
            <span style={percentage}>45%</span>
            Use no carrinho: <span style={climate}>noclima</span>
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
