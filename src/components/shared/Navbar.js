import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuBookIcon from '@mui/icons-material/MenuBook';


const Navbar = () => {
    return (
        <AppBar position="static" style={{ marginBottom: '2rem' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters style={{
                    textAlign: 'center',
                    justifyContent: 'center'
                }}>
                    <MenuBookIcon style={{ marginRight: '0.3rem' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"

                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Book Finder
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
