// require('dotenv').config();
// const express = require('express');
// const app = express();

// const cors = require('cors');
// const Note = require('./models/note');

// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method);
//   console.log('Path:  ', request.path);
//   console.log('Body:  ', request.body);
//   console.log('---');
//   next();
// };

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: 'unknown endpoint' });
// };
// app.use(express.static('dist'));
// app.use(cors());
// app.use(express.json());
// app.use(requestLogger);
// app.use(express.static('build'));
// // eslint-disable-next-line no-unused-vars
// let notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     important: true,
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     important: false,
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     important: true,
//   },
// ];
// // GET ROOT
// app.get('/', (req, res) => {
//   res.send('<h1>Hello World!</h1>');
// });
// // GET ALL NOTES
// app.get('/api/notes', (request, response) => {
//   Note.find({}).then((notes) => {
//     response.json(notes);
//   });
// });
// // GET ONE NOTE
// app.get('/api/notes/:id', (request, response) => {
//   Note.findById(request.params.id)
//     .then((note) => {
//       if (note) {
//         response.json(note);
//       } else {
//         response.status(404).end();
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       response.status(400).send({ error: 'malformatted id' });
//     });
// });
// // CREATE NEW NOTE
// app.post('/api/notes', (request, response, next) => {
//   const body = request.body;

//   if (body.content === undefined) {
//     return response.status(400).json({ error: 'content missing' });
//   }

//   const note = new Note({
//     content: body.content,
//     important: body.important || false,
//   });

//   note
//     .save()
//     .then((savedNote) => {
//       response.json(savedNote);
//     })
//     .catch((error) => next(error));
// });
// // DELETE ONE NOTE
// app.delete('/api/notes/:id', (request, response, next) => {
//   Note.findByIdAndRemove(request.params.id)
//     // eslint-disable-next-line no-unused-vars
//     .then((result) => {
//       response.status(204).end();
//     })
//     .catch((error) => next(error));
// });
// // UPDATE ONE NOTE
// app.put('/api/notes/:id', (request, response, next) => {
//   console.log('🚀 ~ file: index.js:95 ~ app.put ~ request:', request.params.id);
//   const { content, important } = request.body;

//   // const note = {
//   //   content: body.content,
//   //   important: body.important,
//   // };

//   Note.findByIdAndUpdate(
//     request.params.id,
//     { content, important },
//     { new: true, runValidators: true, context: 'query' }
//   )
//     .then((updatedNote) => {
//       response.json(updatedNote);
//     })
//     .catch((error) => next(error));
// });

// app.use(unknownEndpoint);

// const errorHandler = (error, request, response, next) => {
//   console.error(error.message);

//   if (error.name === 'CastError') {
//     return response.status(400).send({ error: 'malformatted id' });
//   } else if (error.name === 'ValidationError') {
//     return response.status(400).json({ error: error.message });
//   }

//   next(error);
// };

// // this has to be the last loaded middleware.
// app.use(errorHandler);

// const PORT = process.env.PORT || 10000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const app = require('./app'); // the actual Express application
const config = require('./utils/config');
const logger = require('./utils/logger');

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
