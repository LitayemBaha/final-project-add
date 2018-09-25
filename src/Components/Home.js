import React,{Component}  from 'react';
import Search from './search';
import Services from './Services';
import ServicesClients from './ServicesClients';
import Maps from './Maps';
import Header from './Header';



class Home extends Component {
  constructor(props){
    super(props)
    this.state={
        tabVilles:['Ariana','Béja','BenArous','Bizerte','Gabès','Gafsa','Jendouba','Kairouan','Kasserine','Kébili','Kef','Mahdia','Manouba','Médenine',
          'Monastir','Nabeul','Sfax','SidiBouzid','Siliana','Sousse','Tataouine','Tozeur','Tunis','Zaghouan'
          ],
          value:'',
          

    
  }}
  onChangeVille=(event)=>{
    this.setState({
      value:event.target.value
    })
  }
  // changeVille = (event)=>{
  //   this.setState({
  //     value:event.target.value
  //   })
  //   return(
  //     this.state.tabVilles.filter((el,i)=>{ 
  
  //       return(el.toLowerCase().startsWith(this.state.value.toLowerCase()))}).map((el,i)=>{
  //        return (
  //         <div className="dropdown-content">
  //         <label> el</label>
  //         {console.log(el)}
  //       </div>
  //        )
  //       }))}
      
  render() {
    return (
      <div className="App">
     {/* <input type="text" 
     onChange={(e)=>this.setState({value:e.target.value})}
     value={this.state.value} />
     <ul>{
       this.state.tabVilles.filter(x=>{
        return this.state.value.trim() && x.toLowerCase().includes(this.state.value.toLowerCase())
       }).map(x=>{
         return <li>{x}</li>
       })
     }</ul> */}
        <div className="container">
        <Header/>
        <Search onChangeVille={this.onChangeVille} tabVilles={this.state.tabVilles} value={this.state.value}/>
        </div>
        <ServicesClients/>
        <Services/>
        <Maps/>
          
      </div>
    );
  }
}

export default Home;
