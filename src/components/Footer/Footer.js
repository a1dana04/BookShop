import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <h1>BOOKShop</h1>
          <div className="footer--menu">
            <h3>
              Способ оплаты <br />
              Условия доставки <br />
              Правила покупки
            </h3>
          </div>
          <div className="footer--menu2">
            <h3>
              FAQ <br />О нас
            </h3>
          </div>
          <div className="footer--menu3">
            <h3>
              {" "}
              Связаться с нами: <br />
              +996 222 533 735 <br />
               +996 222 533 735 <br />
                +996 222 533 735
            </h3>
          </div>
          <div className="footer--menu4">
            <h3>Адрес</h3>
            <p>Lorem ipsum dolor sit amet, consectetur <br />
             adipiscing elit. Varius in dolor viverra feugiat  <br />
             neque, sed in. Mattis volutpat malesuada <br />
              velit parturient aliquam, est. Mauris vitae velit <br />
               laoreet faucibus nec amet velit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
