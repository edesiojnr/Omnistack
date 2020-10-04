import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
    <article className="teacher-item">
                <header>
                    <img src="https://avatars1.githubusercontent.com/u/62727867?s=460&u=9c88ac92d1b2607ad833c235c3a6028984d96b95&v=4" alt="Edesio Junior"/>
                    <div>
                        <strong>Edesio Junior</strong>
                        <span>Inglês</span>
                    </div>
                </header>

                <p>
                    Apaixonado por idiomas 
                    <br /><br />
                    Pretende conhecer vários países em seu ano sabatico
                </p>

                <footer>
                    <p>
                        Preço/hora 
                        <strong>R$ 100,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                    </button>
                </footer>
            </article>
 );
}

export default TeacherItem;