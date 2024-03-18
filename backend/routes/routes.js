// Importar express
import express from "express";
 
// Importar funções dos controllers

import { login } from "../controllers/login.js";

import { showMenus, showMenuById, createMenu, updateMenu, deleteMenu } from '../controllers/menus.js';

import { showPermissoesAcesso, showPermissaoAcessoById, createPermissaoAcesso, updatePermissaoAcesso, deletePermissaoAcesso } from "../controllers/permissoesAcesso.js";

import { showPermissoes, showPermissaoById, createPermissao, updatePermissao, deletePermissao } from "../controllers/permissoes.js";

import { showUsuarios, showUsuarioById, createUsuario, updateUsuario, deleteUsuario } from "../controllers/usuarios.js";
 
// iniciando express router
const router = express.Router();

// Login
router.post('/login', login);

// Menus
router.get('/menus', showMenus);
router.get('/menus/:id', showMenuById);
router.post('/menus', createMenu);
router.put('/menus/:id', updateMenu);
router.delete('/menus/:id', deleteMenu);
 
// Permissoes
router.get('/permissoes', showPermissoes);
router.get('/permissoes/:id', showPermissaoById);
router.post('/permissoes', createPermissao);
router.put('/permissoes/:id', updatePermissao);
router.delete('/permissoes/:id', deletePermissao);

 
// PermissoesAcesso
router.get('/permissoesAcesso', showPermissoesAcesso);
router.get('/permissoesAcesso/:id', showPermissaoAcessoById);
router.post('/permissoesAcesso', createPermissaoAcesso);
router.put('/permissoesAcesso/:id', updatePermissaoAcesso);
router.delete('/permissoesAcesso/:id', deletePermissaoAcesso);
 
// Usuarios
router.get('/usuarios', showUsuarios);
router.get('/usuarios/:id', showUsuarioById);
router.post('/usuarios', createUsuario);
router.put('/usuarios/:id', updateUsuario);
router.delete('/usuarios/:id', deleteUsuario);

 
// Exportar router
export default router;