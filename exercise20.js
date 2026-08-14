function applyTwice (fn,value)
{
    return fn (fn(value));
}

function double (n)
{
    return n * 2;
}

console.log (applyTwice(double, 5));