import React, { useState } from "react"
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Typography } from "@mui/material"
import LogoSimples from "../../images/LogoSimplesTransparente.png"
import { style } from "./style"

export const LoginComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = () => {
    if (email === 'usuario@example.com' && password === 'senha123') {
      alert('Login bem sucedido!')
    } else {
      alert('Credenciais inválidas. Tente novamente.')
    }
  }

  return (
    <Box sx={style.root}>
      <Box component='img' src={LogoSimples} alt="Logo" height='10em' sx={style.logo} />
      <Typography sx={style.loginText}>Login</Typography>
      <TextField
        sx={style.input}
        label="Digite seu email"
        variant="outlined"
        type="text"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        sx={style.input}
        label="Digite sua senha"
        variant="outlined"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button sx={style.submitButton} variant="contained" type="submit" onClick={handleLogin}>Entrar</Button>
      <Box sx={style.createAccountContainer}>
        <Typography sx={style.createAccountText}>Ainda não possui conta?</Typography>
        <Box component='a' href="#create-acount" sx={style.createAccountLink}>Criar Conta</Box>
      </Box>
    </Box>
  )
}
