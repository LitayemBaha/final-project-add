import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
         <div className="container1">
            <div className="containerIntro">
              <div className='search'>
                <div className='box'>
                  <h2>Trouvez rapidement un(e) infermier(e)</h2>
                  <div className="searchItem">
                    <input className="inputSearch" onChange={(event)=>this.props.onChangeVille(event)} type="text" placeholder="Ville" />
                    <span><i className="fa fa-search text-white" ></i></span>
                  </div>
                </div>
                <ul className="list-of-ville">{
                     this.props.tabVilles.filter(x=>{
                     return this.props.value.trim() && x.toLowerCase().includes(this.props.value.toLowerCase())
                     }).map(x=>{
                     return <li className="Ville-select">{x}</li>
                     })
                    }
                    </ul>
                </div>
                <div className="inscription-gratuite">
                   <div className='box'>
                      <h2>Vous cherchez un job d'infermier(e) ?</h2>
                      <button className="btn">Inscription gratuite</button></div>
                   </div>
                 </div>
              </div>
        )
    }
}
export default Search;