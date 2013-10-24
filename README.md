# RAM

Um simples sistema de cache em memória.

## Instação

    npm install ram

## Uso

    var ram = require('ram');
    var Memory = ram.Memory;

    // Inserindo na memória

    var users = new Memory('users');

    users.insert('dancarmo', {
      name: 'Dan',
      image: 'dan.png',
    });

    // Removendo objeto
    users.remove('dancarmo');

    // Recebendo objeto
    users.get('dancarmo');

    // Procurando objeto na coleção
    users.find({ name: 'Dan' });