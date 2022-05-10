# Visual Thinking API

---

Api construida en node js, para leer un archivo en formato js y poder consultar tres endPoints.


| Descripción                                                                     | url                                               |
| ---------------------------------------------------------------------------------- | --------------------------------------------------- |
| Consultar todos los registros con todos sus campos                               | `http://localhost:3001/v1/partners/allPartners`   |
| Devuelve el registro de emailque tengan el campo`haveCertification` en verdadero | `http://localhost:3001/v1/partners/emailPartnets` |
| Devuelve todos los campos de la lista de archivos que tengan el campo`credits`   | `http://localhost:3001/v1/partners/credits`       |

### **Dependencias**

Jest para crear pruebas unitarias dentro de nodeJs

`npm install --save-dev jest`

Linter para verificar y dar orden a la sintexis utilizada

`npm install eslint --save-dev`

---

##### Para el package.json

`"test": "node ./node_modules/.bin/jest",`

`"server": "node ./lib/server.js",`

`"linter": "node ./node_modules/eslint/bin/eslint.js .",`

`"linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix"`

### **Diagrama de funcionalidad**
