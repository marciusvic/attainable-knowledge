import React, { useState } from "react"
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Typography } from "@mui/material"
import LogoSimples from "../../images/LogoSimplesTransparente.png"
import { style } from "./style"
import data from "./data.json"

export const LoginComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState(null)

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = () => {
    const user = data.users.find((user) => user.email === email && user.password === password)
    if (user) {
      setLogin(true)
      alert('Login efetuado com sucesso!')
    } else {
      setLogin(false)
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
      {login === false && <Typography sx={style.loginError}>Email ou senha incorretos!</Typography>}
      <Button sx={style.submitButton} variant="contained" type="submit" onClick={handleLogin}>Entrar</Button>
      <Box sx={style.createAccountContainer}>
        <Typography sx={style.createAccountText}>Ainda não possui conta?</Typography>
        <Box component='a' href="#create-account" sx={style.createAccountLink}>Criar Conta</Box>
      </Box>
    </Box>
  )
}
