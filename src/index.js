import Pizza from "./models/Pizza.js";
import  { get2Pizzas, getAll, getByID, deleteByID, create, update } from "./services/pizzaServices.js";
import express from 'express';
// ./ significa en el directorio que estoy parado, ../ significa la carpeta anterior

const app = express();
const port = 3000;
app.use(express.json())

/*app.get('/', async (req, res) => {
    const Pizzas = await getAll();
    res.status(200).json(Pizzas)
})*/

/*app.get('/:id', async (req, res) => {
    const Pizza = await getByID(req.params.id);
    res.status(200).json(Pizza)
})*/


// hay que usar postman para mandar los datos para la base de datos
/*app.post('/api/', async (req, res)=> {
    const pizza = new Pizza()

    pizza.nombre = req.body.nombre
    pizza.descripcion = req.body.descripcion
    pizza.libreGluten = req.body.libreGluten
    pizza.importe = req.body.importe
    await create(pizza)
    res.status(201).json(pizza)
})*/

// hay que usar postman para mandar los datos para la base de datos
/*app.delete('/api/', async (req, res) => {
    const id = req.body.id
    const Pizza = await getByID(id);
    await deleteByID(id);
    res.status(200).json(Pizza)
})*/

// hay que usar postman para mandar los datos para la base de datos
/*app.put('/api/', async (req, res) => {
    const id = req.body.id
    const pizza2 = new Pizza()
    pizza2.nombre = req.body.nombre
    pizza2.descripcion = req.body.descripcion
    pizza2.libreGluten = req.body.libreGluten
    pizza2.importe = req.body.importe
    await update(id, pizza2)
    const Pizza1 = await getByID(id);

    res.status(200).json(Pizza1)
})*/

app.listen(port, () => {
    console.log(`Se esta usando el puerto: ${port}`)
})

//await get2Pizzas();

//await create();

//await deleteByID();