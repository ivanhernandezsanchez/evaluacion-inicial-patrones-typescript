¿Qué es una dependencia?
Una dependencia es algo que una clase necesita para poder funcionar.

¿Qué significa inyectar una dependencia?
Significa que en vez de crearla nosotros, se la damos a la clase desde fuera.

¿Qué diferencia existe entre crear una dependencia con new y recibirla mediante el constructor?
Con new, la clase crea ella misma lo que necesita.
Con el constructor, recibe lo que necesita desde fuera.

¿Qué problema genera un alto acoplamiento?
Hace que las partes del programa estén muy relacionadas entre ellas, y si cambias una cosa puedes tener que cambiar muchas más.

¿Qué ventaja proporciona Dependency Injection para realizar pruebas?
Hace que sea más fácil hacer pruebas, porque podemos pasar una versión falsa o sencilla de lo que necesita la clase.

¿Por qué este concepto es especialmente importante en frameworks como NestJS?
Porque NestJS utiliza mucho la inyección de dependencias para organizar las diferentes partes del programa y hacer que trabajen juntas de una forma más sencilla.