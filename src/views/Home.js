import React from "react";
import { Navbar } from "../components/Navbar";
import { Stack } from "@mui/material";
import { Sidebar } from "../components/Sidebar";
import { Feed } from "../components/Feed";
import { SearchForm } from "../components/SearchForm"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchHistory: [{ searchName: "", songsList: [] }],
            currentStep: 0
        };
    }

    moveToStep = (index) => {
        this.setState({
            currentStep: index + 1
        })
    }

    saveSearch = (actualSearch, query) => {
        const history = this.state.searchHistory.slice(0, this.state.currentStep + 1).slice(-6);
        this.setState({
            searchHistory: history.concat([{ songsList: actualSearch, searchName: query }]),
            currentStep: history.length
        });
    }

    render() {
        const history = this.state.searchHistory;
        const currentList = history[this.state.currentStep];
        return (
            <>
                <Navbar></Navbar>
                <Stack direction="row" spacing={3} justifyContent="space-between">
                    <Sidebar history={history.slice(1)} moveTo={this.moveToStep} />
                    <Feed posts={currentList.songsList} />
                    <SearchForm saveSearch={this.saveSearch} />
                </Stack>
            </>
        )
    }
}

export default Home;
