import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { FC } from 'react'
import theme from '../../theme';
import { Divider, IconButton, InputAdornment } from '@mui/material';
import { ArrowBack, AttachMoney, Google, LoginOutlined } from '@mui/icons-material';

interface RegisterProps { }



const Register: FC<RegisterProps> = ({ }) => {

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            name: data.get('name'),
        });
    };
    return (
        <ThemeProvider theme={theme}>
            <RouterLink to="/login">
                <IconButton sx={{ position: 'absolute', right: 20, top: 20 }}>
                    <ArrowBack />
                </IconButton>
            </RouterLink>

            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={false}
                    md={6}
                    sx={{
                        backgroundImage: "url(https://cdn.discordapp.com/attachments/763837038990327848/1074692908025921627/Left1.png)",
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '88vh'
                        }}
                    >
                        <Typography component="h1" variant="h2" color="secondary" sx={{ fontWeight: 600, mb: 5, md: {fontSize: 10} }}>
                            Создать аккаунт
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, maxWidth: '60%' }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="FIO"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                sx={{
                                    borderColor: 'secondary', borderRadius: 40, '& fieldset': {
                                        borderRadius: '15px',
                                        borderColor: 'secondary'
                                    },
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                sx={{
                                    borderColor: 'secondary', borderRadius: 40, '& fieldset': {
                                        borderRadius: '15px',
                                        borderColor: 'secondary'
                                    },
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                sx={{
                                    borderColor: 'secondary', borderRadius: 40, '& fieldset': {
                                        borderRadius: '15px',
                                    },
                                }}
                                autoComplete="current-password"
                            />


                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color='secondary'
                                sx={{ mt: 8, mb: 4, fontSize: 25, fontWeight: 600, borderRadius: 4, paddingY: 1.5 }}
                            >
                                Вход
                            </Button>
                            <Divider />
                            <Button
                                startIcon={<Google />}
                                type="submit"
                                fullWidth
                                variant="outlined"
                                color='secondary'
                                sx={{ mt: 6, mb: 2, fontSize: 25, fontWeight: 500, borderRadius: 4, paddingY: 1.5 }}
                            >
                                Вход через Google
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Register;