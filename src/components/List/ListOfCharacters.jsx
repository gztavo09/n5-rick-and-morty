import React, { useState, useEffect } from "react";

import ListContainer from "../../styles/List/List__Container";
import ListImage from "../../styles/List/List__Image";
import ListItem from "../../styles/List/List__Item";
import ListSpan from "../../styles/List/List__Span";

const URL = 'https://rickandmortyapi.com/api/character';

const ListOfCharacters = () => {
    const [characters, setCharacters] = useState([]);

    const getList = async () => {
        let response = await fetch(URL)
        response = await response.json()
        console.log('response.results', response)
        setCharacters(response.results)
    }

    useEffect(() => {
        getList()
      }, [])

    return (
        <ListContainer>
        {
            characters ?
            characters.map(x => {
            return (
                <ListItem key={x.id}>
                    <ListImage src={x.image} alt="" />
                    <p>
                        { x.name } - 
                        <ListSpan>{x.species}</ListSpan>
                    </p>
                </ListItem>
            )
            }) :
            'No hay personajes'
        }
        </ListContainer>
    )
}

export default ListOfCharacters;