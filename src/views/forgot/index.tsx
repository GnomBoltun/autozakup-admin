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

interface ForgotProps { }



const Forgot: FC<ForgotProps> = ({ }) => {

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
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
                <Grid item xs={12} sm={12} md={6} component={Paper} elevation={0} square>
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
                        <Typography component="h1" variant="h2" color="secondary" sx={{textAlign: 'left', fontSize: {xs: 30, md: 40, lg: 60} ,fontWeight: 600, mb: 5, maxWidth: {xs: '80%',sm:'60%'}}}>
                            Забыли пароль?
                        </Typography>
                        <Typography component="p" variant="h5" color="secondary" sx={{textAlign: 'left', maxWidth: {xs: '80%',sm:'60%'}}}>
                            Введите адрес электронной почты, который вы использовали при регистрации, и мы вышлем вам инструкции по сбросу вашего пароля.
                            <br/>
                            <br/>
                            По соображениям безопасности мы не храним ваш пароль. Поэтому будьте уверены, что мы никогда не отправим ваш пароль по электронной почте.
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: {xs: '80%',sm: '60%',} }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <LoginOutlined />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    borderColor: 'secondary', borderRadius: 40, '& fieldset': {
                                        borderRadius: '15px',
                                        borderColor: 'secondary'
                                    },
                                }}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                color='secondary'
                                sx={{ mt: 8, mb: 4, fontSize: 25, fontWeight: 600, borderRadius: 4, paddingY: 1.5, paddingX: 5 }}
                            >
                                Отправить запрос
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Forgot