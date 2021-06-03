var nombre = "Denisse" // Se dejó de usar var ya que dio a vulnerabilidades del tipo inyeccion de scripting, si intento referenciarlo antes de su inicializacion, da undefined

document.write(nombre) // Imprimir nombre en cualquier HTML que lo consuma 

let apellido = "Lemon" // Permite mutar los valores, pero que respeta el flujo de ejecucion, si intento referenciarlo antes de su inicializacion, da error

const edad = 22 // Constante