1 �������:

function someFunction() {
  var a = someFunction;
  return a.name; // ������� ����� �������
}

//��������
var checkName = someFunction()
console.log(checkName);





2 �������

function someFunction(fn) {
  if (typeof fn !== "function") return "Not a function";

  var fnName = fn.name; // ������� ����� �������
  return fnName || "Anonymous function";
}

//��������
var checkFunction1 = someFunction(function () {} );
console.log(checkFunction1);

var checkFunction2 = someFunction(function getKerya () {} );
console.log(checkFunction2);

var checkFunction3 = someFunction("srting");
console.log(checkFunction3);

