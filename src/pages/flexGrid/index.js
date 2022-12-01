import { Container, Box } from '@mui/material'
import React from 'react'

const FlexGrid = () => {
    return (
        <Container>
            <Box sx={{
                backgroundColor: 'red', display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <Box sx={{ backgroundColor: 'blue' }}>1</Box>
                <Box sx={{ backgroundColor: 'green' }}>2</Box>
                <Box sx={{ backgroundColor: 'yellow' }}>3</Box>
            </Box>
        </Container>
    )
}

export default FlexGrid