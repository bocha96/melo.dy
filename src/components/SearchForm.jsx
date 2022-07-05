import { Box, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { search } from "../services/SearchFunc";
import data from "../store/songs.json";


export const SearchForm = (props) => {
  const [query, setQuery] = useState("");
  const randomIndex = Math.floor(Math.random() * data.songs.length)

  const randomResult = () => {
    props.saveSearch([data.songs[randomIndex]], `Random: ${data.songs[randomIndex].title}`),
      setQuery("")
  };

  const onQueryChange = (e) => {
    setQuery(e.target.value)
  };


  const handleSubmit = () => {
    const isEmpty = query.split("").map(letter => letter === " ").indexOf(false)

    if (!query || isEmpty < 0) {
      alert("Please enter your search")
    } else {
      props.saveSearch(search(data.songs, query), query),
        setQuery("")
    }
  };
  const keyPress = (e) => {
    if (e.keyCode == 13) {
      handleSubmit();
    }
  }

  useEffect(() => randomResult, [false])


  return (
    <Box flex={3} position="fixed" style={{ marginLeft: "78%", width: "300px" }}>
      <Typography margin="5% 0" variant="h5">Welcome to melo.dy!</Typography>
      <Stack spacing={2} justifyContent="stretch" >
        <TextField
          onChange={onQueryChange}
          value={query}
          label={"Find a song: "}
          onKeyDown={keyPress}
        />

        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        <Button variant="contained" color="secondary" onClick={randomResult}>Random</Button>
      </Stack>

    </Box>
  );
};