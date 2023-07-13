import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import type { UserSigninForm } from '../../../types/user/user';
import { useAppDispatch } from '../../../features/redux/hooks';
import { loginUserThunk, signUpUserThunk } from '../../../features/redux/slices/user/thunks';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

export default function LoginPage(): JSX.Element {
  const [showName, setShowName] = useState(false);
  const dispatch = useAppDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as UserSigninForm;
    if (showName) {
      return void dispatch(signUpUserThunk(data));
    }
    void dispatch(loginUserThunk(data));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {showName ? 'Sign up' : 'Sign in'}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {showName && (
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              type="text"
              id="name"
            />
          )}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            {showName ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container>
            <Grid item>
              <Button onClick={() => setShowName(!showName)}>
                {showName ? 'Already have an account? Sign In' : 'Dont have an account? Sign Up'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
