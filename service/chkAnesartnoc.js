export function consulta(usuario,contrasena,respuesta,privilegio){
    const mysql = require("mysql");
    const connection = mysql.createConnection({
        host: "localhost",
        user: "coneccion",
        password: "QW@345fgP$",
        database: "libreria"
    });

    const sql = `CALL sp_comprobarContrasena(${usuario}, ${contrasena}, @respuesta, @privilegios_in); SELECT @respuesta, @privilegios_in;`
    console.log(sql[0]);
    console.log(sql[1]);

    connection.query(sql, values, (error, results) => {
        if (error){
            console.error(error);
        } else {
            console.log(results);
        }
    });

    connection.end;
};