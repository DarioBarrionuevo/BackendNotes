/* eslint-disable no-unused-vars */
const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://dariobafran:${password}@cluster0.kfzyo3p.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)
console.log('🚀 ~ file: mongo.js:21 ~ Note:', Note)

// Note.find({}).then((result) => {
//   result.forEach((note) => {
//     console.log(note);
//   });
//   mongoose.connection.close();
// });

Note.find({ important: true }).then((result) => {
  result.forEach((note) => {
    console.log('important: ', note)
  })
  mongoose.connection.close()
})

const note = new Note({
  content: 'CSS is meh',
  important: false,
})

note.save().then((result) => {
  console.log('note saved!')
  mongoose.connection.close()
})
