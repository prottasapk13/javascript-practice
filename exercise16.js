function isEven (n)
{

    if( n %2 === 0)

    {
     return true ;
    
    }
    else{

     return false ;
    }
}

for (let i =1 ; i <= 10 ; i++){

    console.log (i, isEven (i));
}