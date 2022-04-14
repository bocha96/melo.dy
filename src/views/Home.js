import React from "react";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {searchResult : []};
       
    }

    updateResult = (result) => {
        this.setState({searchResult: result});
    }
    

    render (){
        return  (
            <div className="Home">
            <h1>Home</h1>
            <p>This is an app for search a title in a list of songs. Have a nice experience!</p>            
            <SearchBar searchResult={this.state} updateResult={this.updateResult} />
            <Table songs={this.state.searchResult} />
            </div>
        )
    }
}

export default Home;