import express from 'express';
import charactersController from '../controllers/charactersController.js';

const router = express.Router();

router
  .get('/characters', charactersController.listCharacters)
  .get('/characters/:id', charactersController.listCharactersById)
  .post('/characters', charactersController.registerCharacters)
  .delete('/characters/:_id', charactersController.deleteCharacters);

export default router;
