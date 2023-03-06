import React from 'react';
import './theme-style.css';

const Theme = ({isDark, setTheme}) => {
  return (
    <div className={isDark? "theme" : "theme light"}>
        <i className={isDark? 'fa-solid fa-sun' : 'fa-solid fa-moon'}
            onClick={()=>setTheme(!isDark)}></i>
    </div>
  );
};

export default Theme;