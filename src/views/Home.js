import React from "react";
import { Navbar } from "../components/Navbar";
import { Stack } from "@mui/material";
import { Sidebar } from "../components/Sidebar";
import { Feed } from "../components/Feed";
import { RightBar } from "../components/RightBar";


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
            <>
            <Navbar></Navbar>
            <Stack direction="row" spacing={3} justifyContent="space-between">
                <Sidebar>Here goes a list: </Sidebar>
                <Feed data={this.state.searchResult}/>
                <RightBar />
            </Stack>
            </>
        )
    }
}

export default Home;
