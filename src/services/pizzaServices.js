import Pizza from "../models/Pizza.js";
import sql from 'mssql'
import configDB from "../models/db.js";

export const get2Pizzas = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('SELECT TOP 2 * FROM Pizzas');

    console.log(results.recordset[0]);
}
//Cuando pones async, significa que la funcion puede ejecutarse de manera asincronica/paralelo debido a que pueden durar un tiempo, pero no sabemos cuanto. Va en la definicion de la funcion
//Cuando pones await, esperas a que llegue la llamada de una funcion asincronica para avanzar con el codigo. Va al lado de la llamada de una variable o funcion


export const getAll = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('SELECT * FROM Pizzas');
    console.log(results)
    return results;
}

export const getByID = async (numero) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("whereCondition", numero).query('SELECT * FROM Pizzas WHERE Pizzas.Id LIKE @whereCondition');
    console.log(results)
    return results
}

export const create = async (pizza) =>{
    const conn = await sql.connect(configDB);
    const results = await conn.request()
    .input("pNombre", pizza.nombre)
    .input("pDescripcion", pizza.descripcion)
    .input("pLibreDeGluten", pizza.libreGluten)
    .input("pImporte", pizza.importe)
    .query('INSERT INTO Pizzas (Nombre, Descripcion, LibreGluten, Importe) VALUES (@pNombre, @pDescripcion, @pLibreDeGluten, @pImporte)');
    console.log(results)
    return results;
}

export const deleteByID = async(numero) =>{
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("whereCondition", numero).query('DELETE FROM Pizzas WHERE Pizzas.Id LIKE @whereCondition'); 
    console.log(results)
    return results
}

export const update = async (id, pizza) =>{
    const conn = await sql.connect(configDB);
    const results = await conn.request()
    .input("whereCondition", id)
    .input("pNombre", pizza.nombre)
    .input("pDescripcion", pizza.descripcion)
    .input("pLibreDeGluten", pizza.libreGluten)
    .input("pImporte", pizza.importe)
    .query('UPDATE Pizzas SET Nombre = @pNombre, Descripcion = @pDescripcion, LibreGluten = @pLibreDeGluten, Importe =  @pImporte WHERE Pizzas.Id LIKE @whereCondition');
    console.log(results)
    return results;
}

//const getByIDArrow = (id) => {
//    // Nuestro Codigo
//}
//
//class PizzaServices {
//
//}
