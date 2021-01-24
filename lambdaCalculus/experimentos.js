Number.prototype.log = function () { console.log(+this) };
Function.prototype.log = function () { console.log(this.toString()) };

// funcção de identidade
// recebe um valor e retorna o próprio valor
const I = a => a
I(3).log()
I(I).log()

// função self aplication (aplicação de si mesmo)
// chamar a função pra ela mesma
const SELF = f => f(f)
SELF(I).log()

// função primeiro
// recebe um valor a que recebe um valor de b e retorna a
const PRI = a => _ => a
PRI(7)(11).log()

// função ultimo
// recebe um valor a que recebe um valor de b e retorna o valor de b
const ULT = _ => b => b
ULT(7)(11).log()

// inverter parametros (flip)
const TRO = f => a => b => f(b)(a)
TRO(PRI)(6)(12).log()
TRO(ULT)(7)(11).log()

// composicao de uma funcao último usando outras duas funções
const ULT2 = a => b => TRO(PRI)(a)(b)
ULT2(13)(20).log()

// boolean TRUE e FALSE
// TRUE ? <PRI> : ULT
// FALSE ? PRI : <ULT>

const T = PRI
const F = ULT

T.toString = () => 'Verdadeiro (PRI)'
F.toString = () => 'Falso (ULT)'

T.log()
F.log()

// NOT
const NOT = a => a(F)(T)
NOT(T).log()
NOT(F).log()

// AND
const AND = a => b => a(b)(F)
AND(F)(F).log()
AND(F)(T).log()
AND(T)(F).log()
AND(T)(T).log()

// OR
const OR = a => b => a(T)(b)
OR(F)(F).log()
OR(F)(T).log()
OR(T)(F).log()
OR(T)(T).log()

// igualdade lógica
const EQ = a => b => a(b)(NOT(b))
EQ(T)(T).log()
EQ(T)(F).log()
EQ(F)(T).log()
EQ(F)(F).log()

// XOR - OU EXCLUSIVO
const XOR = a => b => NOT(EQ(a)(b))
XOR(T)(T).log()
XOR(T)(F).log()
XOR(F)(T).log()
XOR(F)(F).log()