/* Naira, una aprendiz de hechicera, ha encontrado un antiguo códice en las ruinas de Arkanus. Este códice está lleno de símbolos arcanos que, según los manuscritos, ocultan un poderoso conjuro olvidado. Para descifrar el conjuro, debe interpretar correctamente los símbolos según un antiguo sistema numérico mágico. 
Pero cuidado: la energía mágica es caprichosa. Si un símbolo de menor valor aparece justo antes que uno de mayor valor, su energía se resta en lugar de sumarse.
Debes crear una función que reciba una cadena con los símbolos y retorne su valor numérico total. Si encuentras un símbolo desconocido, el conjuro se corrompe, y la función debe devolver NaN.*/

function decodeSpell(spell) {
  const values = {
    "☽": 1,
    "☾": 5,
    "♁": 10,
    "⚕": 50,
    "⚡": 100,
  };

  let total = 0;

  for (let i = 0; i < spell.length; i++) {
    const currentSymbol = spell[i];
    const nextSymbol = spell[i + 1];

    const currentValue = values[currentSymbol];
    const nextValue = values[nextSymbol];

    if (currentValue === undefined) {
      return NaN;
    }

    if (nextSymbol !== undefined && nextValue === undefined) {
      return NaN;
    }

    if (currentValue < nextValue) {
      total = total - currentValue;
    } else {
      total = total + currentValue;
    }
  }

  return total;
}
