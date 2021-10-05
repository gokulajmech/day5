//print evev number in array
console.log("1.print odd numbers:");
(
    function ()
    {
        let n=[1,12,3,4,5,6,7,8];
        console.log(n);
        let m=n.filter((k)=>(k%2!=0)?  k:null)
        console.log(m);
    }
)();
 console.log("2.captialize only every first char of a word");
(
    function ()
    {
        let k='THIS TIGER name is thirsty';
        console.log(k);
        let s=k.toLowerCase();
        let l='';
        // console.log(s.length);

                for(let i=0;i<s.length;i++)
                {
                    if(s[i]===' ')
                    {
                        
                        l=l+" "+s.charAt(i+1).toUpperCase();
                        i++;
                    }
                    else if(i===0 )
                    {
                        l=l+s.charAt(i).toUpperCase();
                    }
                    else
                      {
                         l=l+s[i];
                      }
                }
                console.log(l);
    }
    
)();
 console.log("3.sum of the array values");
(
    function ()
    {
        let n=[1,12,3,4,5];
        console.log(n);
        let m=n.reduce((m,n)=> m+n);
        console.log(m);
    }
)();
console.log("4.Print Prime Numbers:");
(
    function ()
    {
        let n=[1,2,3,4,5,6,7,9];
        console.log(n);
        let m=n.filter((m)=>{
            let count=0;
            for(let i=1;i<=m;i++)
            {
                if(m%i===0)
                {
                    count++;
                }
            }
            if(count<=2)
            {
                return m;
            }
        });
        console.log(m);
    }
)();
console.log("5.Print palindrome:");
(
    function ()
    {
        let s=['air','water','soil','deed','12321','123'];
        console.log(s);
        
        let m=s.filter((m)=>{
                                let d='';
                                for(let i=m.length-1;i>=0;i--)
                                {
                                    d=d+m[i];
                                }
                                if(d===m)
                                {
                                    return m;
                                }
                            });

        console.log(m);
    }
)();
