function max3 (a,b,c)
{
    let largest = a;

    if(b > largest)
    {

        largest = b;
    }

    if(c > largest)
    {
        largest = c;
    }

    return largest;
}

console.log(max3(10,20,15));