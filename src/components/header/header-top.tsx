import * as React from 'react';

export const HeaderTop: React.SFC = () => {
    return (
    <div className="header__top">
      <div className="container">
        <div className="header__logo">
          <img src="/img/logo.jpg" width={70} height={85} alt="SIP Trend" />
        </div>
        <h2 className="header__promo">Строительство каркасно-панельных домов СИП.<br/>Купольных ЭКО домов.</h2>
        <div className="header__contacts">
            <a href="tel:+375333209008" className="phone-link mts">+375 (33) 320 90 08</a>
            <a href="tel:+375290000000" className="phone-link vel">+375 (29) 000 00 00</a>
        </div>
      </div>
    </div>
  );
};
