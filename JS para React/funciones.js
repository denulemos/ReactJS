// Manera clasica - Da lugar a vulnerabilidades ya que puede ser redefinido
function sumar(a, b) {
  return a + b;
}

// Manera Arrow - Mas seguro ya que es un const, no puede ser redefinido 
const sumarNuevo = (a, b) => a+b;

