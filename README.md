#### Visual Thinking API

---

Api construida en node js, para leer un archivo en formato js y poder consultar tres endPoints

| Descripción                                                                                  | url                                             |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Consultar todos los registros<br />con todos sus campos                                       | http://localhost:3001/v1/partners/allPartners   |
| Devuelve el registro de email<br />que tengan el campo `haveCertification` en verdadero     | http://localhost:3001/v1/partners/emailPartnets |
| Devuelve todos los campos de la lista de archivos que tengan el campo `credits` mayor a 500 | http://localhost:3001/v1/partners/credits       |
