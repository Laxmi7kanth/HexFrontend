import {Component} from "react"
import './App.css';


class App extends Component{
  state={userPosts:[],searchInput:""}

  componentDidMount(){
    this.getProductsApi()
  }

  getProductsApi=async()=>{
    const {searchInput}=this.state
    const response=await fetch(`https://hexbackend.onrender.com/v1/users/?searchText=${searchInput}`)
    if(response.ok===true){
      const data=await response.json()
      this.setState({userPosts:data})
    }
    else{
      this.setState({userPosts:[]})
      console.log("something went wrong")
    }
  }

  onInputChange=(event)=>{
    this.setState({searchInput:event.target.value},this.getProductsApi)
  }

  render(){
    const{userPosts,searchInput}=this.state
    return(
      <div className="bg-container">
        <h1 className="heading">Users Data</h1>
        <div className="ip">
          <input type="search" value={searchInput} onChange={this.onInputChange} placeholder="Search"/>
        </div>
        <table>
          <thead>
          <tr>
            <th className="c1">id</th>
            <th>name</th>
            <th>username</th>
            <th>title</th>
            <th>body</th>
            <th>email</th>
            <th>street</th>
            <th>suite</th>
            <th>city</th>
            <th>zipcode</th>
            <th>phone</th>
            <th>website</th>
            <th>company</th>
          </tr>
          </thead>
          <tbody>
          {
             userPosts.map((eachItem)=>(
              <tr>
                <td>{eachItem.id}</td>
                <td>{eachItem.name}</td>
                <td>{eachItem.username}</td>
                <td>{eachItem.title}</td>
                <td>{eachItem.body}</td>
                <td>{eachItem.email}</td>
                <td>{eachItem.street}</td>
                <td>{eachItem.suite}</td>
                <td>{eachItem.city}</td>
                <td>{eachItem.zipcode}</td>
                <td>{eachItem.phone}</td>
                <td>{eachItem.website}</td>
                <td>{eachItem.companyName},{eachItem.catchPhrase},{eachItem.bs}</td>
              </tr>
             ))
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
