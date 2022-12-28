import characters from '../models/Characters.js';

class charactersController {
  static registerCharacters = (req, res) => {
    const character = new characters(req.body);
    character.save((err) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Não foi possível registrar.` });
      } else {
        res.status(201).send({ message: 'Personagem registrado com sucesso.' });
      }
    });
  };

  static listCharacters = (req, res) => {
    characters.find((err, characters) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Não foi possível localizar.` });
      } else {
        res.status(200).send(characters);
      }
    });
  };

  static listCharactersById = (req, res) => {
    const { id } = req.params;
    characters.findById(id, (err, characters) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Não foi possível localizar.` });
      } else {
        res.status(200).send(characters);
      }
    });
  };

  static deleteCharacters = (req, res) => {
    const { _id } = req.params;
    characters.findByIdAndDelete(_id, (err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Não foi possível remover.` });
      } else {
        res.status(200).send({ message: 'Personagem removido com sucesso.' });
      }
    });
  };
}

export default charactersController;
