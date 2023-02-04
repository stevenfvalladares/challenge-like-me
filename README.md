Script de instrucciones SQL
===========================

*   Paso 1: crear la base de datos "likeme".  

    ```
      $ CREATE DATABASE likeme;
    ```
*   Paso 2: crear una tabla llamada "posts" con las siguientes columnas:  
    
    ```
    $ CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000), description VARCHAR(255), likes INT);
    ```
