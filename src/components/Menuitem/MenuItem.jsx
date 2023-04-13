import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title , price, tags}) => (
  <div className="app__menuitem">
    <div className="app_menuitem-head">
      <div className="app_menuitem-name">
        <p className="p_cormorant" style={{color: '#DCCA87'}}>{title}</p>
      </div>

      <div className="app__menuitem-dash"/>
 
      <div className="app_menuitem-price">
        <p className="p_cormorant">{price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAA'}}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
