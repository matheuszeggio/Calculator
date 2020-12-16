var botao = document.getElementById('botao');
        botao.addEventListener('click', (event)=>{
            var firstNumber = document.getElementById('firstNumber');
            var firstNumberConvertible = parseInt(firstNumber.value);
            var operation = document.getElementById('operation');
            var secondNumber = document.getElementById('secondNumber');
            var secondNumberConvertible = parseInt(secondNumber.value);
            var resultado = document.getElementById('resultado');

            if(operation.value == "+"){
                result = firstNumberConvertible + secondNumberConvertible;
            }else if(operation.value == "-"){
                result = firstNumberConvertible - secondNumberConvertible;
            }else if(operation.value == "/"){
                result = firstNumberConvertible / secondNumberConvertible;
            }else if(operation.value == "*" || operation.value == "x"){
                result = firstNumberConvertible * secondNumberConvertible;
            }else{
                return alert('Insira um caractere de operação aritimética válido! exs: +, -, /, *');
            }
            resultado.value = result;
        });