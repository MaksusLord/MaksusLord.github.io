"use strict";

/**
 * Функция, возвращающая x в степени n (n - целое число)
 * @param {number} x - запрашиваемое числ, котоое возводится в степень n
 * @param {number} n - степень, в которую возводится x
 * @returns {number} - значение x, вовзведенное в степень 
 */

function pow(x, n)
{
    return x**n;
}

/**
 * вычисляет сумму чисел от 1 до n включительно
 * @param {number} n - число, до которого необходимо рассчитать сумму
 * @returns {number} - сумму всех чисел от n до 1 
 */

function sumTo(n)
{
    return (n*(n+1))/2;  

}

/**
 * возвращает факториал числа n!
 * @param {number} n - число, для которого вычисляется факториал 
 * @returns {BigInt} - Факториал заданного числа в виде BigInt
 */

function factorial(n)
{
    if (n<=0)
    {
        return 1n;
    }
    else{
        res = BigInt (n) *  BigInt(factorial(n-1))
    }
    return res;
}

/**
 * возвращает n-е число Фибоначчи
 * @param {number} n - индекс желаемого числа Фибоначчи
 * @returns  {BigInt} - n-е число Фибоначчи в виде BigInt
 */

function fib(n){
    a = BigInt(1);
    b=BigInt(1);
    if (n== BigInt(0))
    {
        return BigInt(0);
    }
    else
    {
        for (i = BigInt(3); i<=n; i++) 
        {
            c = a+b;
            a=b;
            b=c;
        }
        return b;
    }
}

/**
 * принимает целочисленное значение x и возвращает анонимную функцию
 * @param {number} x - значение, с которым нужно сравнить
 * @returns {function} -  функция, которая принимает входное значение и возвращает логическое значение
 */

function compare(x)
{
return function(y)
{
    if (y>x) return true;
    else if (y<x) return false;
    else if (y==x) return null;
}
}

/**
 * возвращает сумму всех своих аргументов
 * @param  {...number} args - значения дя суммирования
 * @returns {number} -  общая сумма всех аргументов
 */

function sum()
{
    var result=0;
    for (var i=0; i<arguments.length; i++)
    {
        result+=arguments[i]
    }
    return result;
}