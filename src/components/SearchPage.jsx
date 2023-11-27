import React from 'react'
import Live from './Live'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'

const SearchPage = () => {
  return (
    <div style={{backgroundColor:'darkred'}}>
       <Button component={Link} to="/" variant="contained"  color="secondary" >Back to Home</Button>
        <Live/>
  
      
      

    </div>
  )
}

export default SearchPage