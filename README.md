Script de instrucciones SQL
===========================

*   Paso 1: crear la base de datos "likeme".  

    ```
      $ CREATE DATABASE likeme;
    ```
*   Paso 2: crear una tabla llamada "posts" con las siguientes columnas:  
    
    ```
      $ CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000), descripcion VARCHAR(255), likes INT);
    ```
Versiones del desafío
---------------------

*   v1.0 parte número de 1 del desafío.
*   v1.2 parte número de 2 del desafío.