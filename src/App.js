import React, {Component} from 'react'
import Components from './Components'
import Description from './Description'
import Price from './Price'
import appleSrc from './images/mac.jpg'


class App extends Component{
  processors=[
    {id:1, description:'2.3GHz 8-core 9th-generation Intel Core i9 processor, Turbo Boost up to 4.8GHz', price:0},
    {id:2, description:'2.4GHz 8-core 9th-generation Intel Core i9 processor, Turbo Boost up to 5.0GHz', price:20000}]
  graphics=[
    {id:1, description:'AMD Radeon Pro 5500M with 4GB of GDDR6 memory', price:0},
    {id:2, description:'AMD Radeon Pro 5500M with 8GB of GDDR6 memory', price:10000},
    {id:3, description:'AMD Radeon Pro 5600M with 8GB of HBM2 memory', price:70000}]
  storage=[
    {id:1, description:'1TB SSD storage', price:0},
    {id:2, description:'2TB SSD storage', price:40000},
    {id:3, description:'4TB SSD storage', price:100000},
    {id:4, description:'8TB SSD storage', price:220000}]
  memory=[
    {id:1, description:'16GB 2666MHz DDR4 memory', price:0},
    {id:2, description:'32GB 2666MHz DDR4 memory', price:40000},
    {id:3, description:'64GB 2666MHz DDR4 memory', price:80000}]

  state={
    price: 239900,
    processorSelected:1,
    graphicsSelected:1,
    memorySelected:1,
    storageSelected:1
  }

  onChangeVarient=(type, id, price)=>{
    
    this.setState({
      price: Number(this.state.price)+ Number(price),
      processorSelected: type==="Processor"? id: this.state.processorSelected,
      graphicsSelected: type==="Graphics" ? id: this.state.graphicsSelected,
      memorySelected: type==="Memory" ? id: this.state.memorySelected,
      storageSelected: type==="Storage" ? id: this.state.storageSelected

    })
    
  }

  render(){
    return(
      <div className="App">
      <div className="AppContainer">
        <div className="left">
          <img src={appleSrc}/>
        </div>
        <div className="right">
          <Description processor={this.processors.find((pro)=>pro.id==this.state.processorSelected)}
                      graphics={this.graphics.find((gra)=>gra.id==this.state.graphicsSelected)}
                      memory={this.memory.find((memo)=>memo.id==this.state.memorySelected)}
                      storage={this.storage.find((sto)=>sto.id==this.state.storageSelected)}/>
          <hr/>
          <Components type={'Processor'} varients={this.processors} onChangeVarient={this.onChangeVarient} selected={this.state.processorSelected}/>
          <Components type={'Graphics'} varients={this.graphics} onChangeVarient={this.onChangeVarient}  selected={this.state.graphicsSelected}/>
          <Components type={'Memory'} varients={this.memory} onChangeVarient={this.onChangeVarient} selected={this.state.memorySelected}/>
          <Components type={'Storage'} varients={this.storage} onChangeVarient={this.onChangeVarient} selected={this.state.storageSelected}/>

        </div>
      </div>
      <Price price={this.state.price}/>
      </div>
    )
  }
}
export default App;
