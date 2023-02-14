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
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import theme from '../../theme';
import { Divider, InputAdornment } from '@mui/material';
import { AttachMoney, Google, LoginOutlined } from '@mui/icons-material';

interface LoginProps { }



const Login: FC<LoginProps> = ({ }) => {

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
            <Typography component="h1" variant="h2" color="secondary" sx={{ fontWeight: 600, mb: 5 }}>
              Салем!
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, maxWidth: '80%' }}>
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  borderColor: 'secondary', borderRadius: 40, '& fieldset': {
                    borderRadius: '15px',
                  },
                }}
                autoComplete="current-password"
              />
              <Grid container sx={{ alignItems: "center" }}>
                <Grid item xs>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="secondary" />}
                    label="Запомнить меня"
                  />
                </Grid>
                <Grid item>
                  <RouterLink to="/forgot">
                    <Typography component='p' color='primary' variant="body2" sx={{ textDecoration: 'none', fontWeight: 600 }}>
                      Забыли пароль?
                    </Typography>
                  </RouterLink>

                </Grid>
              </Grid>

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
              <Grid container>
                <Grid item xs>

                </Grid>
                <Grid item>
                  <RouterLink to="/register">
                    <Typography component='p' color='primary' variant="body2" sx={{ textDecoration: 'none', fontWeight: 600 }}>
                      {"Зарегистрироваться"}
                    </Typography>
                  </RouterLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Login