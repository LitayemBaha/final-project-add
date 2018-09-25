import React, { Component } from 'react';

class ServicesClients extends Component {
    render() {
        return (
            <div className="body-servicesClients">
               <h1 className="allo-fermliya">" AlloFermly(a) "</h1>
               <h2 className="title-servicesClients">Vous aider rapidement à trouver un(e) infirmièr(e) près de chez vous </h2>
               <div className='services'>
                   <div className='service'>
                     <i class="fas fa-map-marker-alt red-color"></i>
                     <h4 className="title-servicesClients">Infirmièr(e)s dans votre région</h4>
                   </div>
                   <div className='service'>
                     <i class="fas fa-child red-color"></i>
                     <h4 className="title-servicesClients">Economisez</h4>
                   </div>
                   <div className='service'>
                     <i class="fas fa-american-sign-language-interpreting red-color"></i>
                     <h4 className="title-servicesClients">Entrez en contact rapidement</h4>
                   </div>
                   <div className='service'>
                     <i class="fas fa-comments red-color"></i>
                     <h4 className="title-servicesClients">Créez votre profil gratuitement</h4>
                   </div>
                   <div className='service'>
                     <i class="fas fa-user-circle red-color"></i>
                     <h4 className="title-servicesClients">Commentaires et recommandations</h4>
                   </div>
                   <div className='service'>
                     <i class="fas fa-user-check red-color"></i>
                     <h4 className="title-servicesClients">Vérifications de l'utilsateur</h4>
                   </div>
               </div>
            </div>
        )
    }
}
export default ServicesClients; 