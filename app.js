import express from 'express'
import db from "./config/dbConnect.js"

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso")
})
