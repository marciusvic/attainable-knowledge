import React from "react"
import { LoginComponent } from "../components/LoginComponent"
import Box from "@mui/material/Box"

const style = {
    root: {
        backgroundColor: "#0A001B",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
}

export default function Login() {
    return (
        <Box sx={style.root}>
            <LoginComponent />
        </Box>
    )
}
