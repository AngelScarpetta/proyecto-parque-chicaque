//este sera el main
const app = require('./app');
//llamar los metodos
app.listen(app.get('port'));//linea de codigo donde se va usar el puerto

//se va a sacar un mensaje
console.log('server on port',app.get('port'));
//"type": "commonjs", en el package.json es par inicar sin cargar las funciones anonimas

