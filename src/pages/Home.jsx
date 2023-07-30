import React from "react"
import { HomeComponent } from "../components/Home/HomeComponent"
import Box from "@mui/material/Box"

const style = {
    root: {
        backgroundColor: "#0A001B",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
}

export default function Home() {
    return (
        <Box sx={style.root}>
            <HomeComponent/>
        </Box>
        
    )
}