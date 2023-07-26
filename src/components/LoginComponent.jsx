import React from "react"
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Typography } from "@mui/material"
import LogoSimples from "../images/LogoSimplesTransparente.png"

const style = {
  root: {
    backgroundColor: '#101418',
    height: '60%',
    width: '27vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    padding: '20px'
  },
  loginText: {
    color: '#fff',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    marginBottom: '2vw',
    '& .MuiOutlinedInput-root': {
      borderRadius: '5px',
      backgroundColor: '#f0f2f5',
      boxShadow: 'inset 0px 1px 3px rgba(0, 0, 0, 0.1)',
      transition: 'box-shadow 0.3s ease',
      '&.Mui-focused': {
        boxShadow: 'inset 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 0px 5px rgba(0, 0, 0, 0.2)',
      }
    },
    '& .MuiInputLabel-root': {
      fontSize: '16px',
      transition: 'transform 0.3s ease',
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.8)',
    },
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'
  },
  createAccountContainer: {
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  createAccountText: {
    color: '#fff',
    marginRight: '10px',
    fontSize: '16px',
  },
  createAccountLink: {
    textDecoration: 'none',
    color: '#007BFF',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#0056b3',
    }
  }
}

export const LoginComponent = () => (
    <Box sx={style.root}>
      <Box component='img' src={LogoSimples} alt="Logo" height='10em'/>
      <Typography sx={style.loginText}>Login</Typography>
      <TextField
        sx={style.input}
        label="Digite seu email"
        variant="outlined"
        type="text"
      />
      <TextField
        sx={style.input}
        label="Digite sua senha"
        variant="outlined"
        type="password"
      />
      <Button sx={style.submitButton} variant="contained" type="submit">Entrar</Button>
      <Box sx={style.createAccountContainer}>
          <Typography sx={style.createAccountText}>Ainda não possui conta?</Typography>
          <a href="#create-acount" sx={style.createAccountLink}>Criar Conta</a>
      </Box>
    </Box>
)
