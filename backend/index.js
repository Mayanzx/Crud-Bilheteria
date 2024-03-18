// Importar express
import express from "express";
// Importar cors
import cors from "cors";
// Importar routes
import Router from "./routes/routes.js";
 
// Iniciando express
const app = express();
 
// Usar express json
app.use(express.json());
 
// Usar cors
app.use(cors());
 
// Usar router
app.use(Router);

app.use((req, res, next)=>{
    res.status(404).send('Page not Found')
});
 
app.listen(3000, () => console.log('Server running at http://localhost:3000'));