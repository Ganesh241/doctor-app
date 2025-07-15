const express=require('express')

const app=express();

app.use(express.json());

const users=[{
    name:"John",
    JohnKidneys:[{
        helthy:"false"
    }]
}]


app.get('/',function(req,res){
    const johnKidney=users[0].JohnKidneys
    const numberOfKidney=johnKidney.length;
    let numberOfHelthyKidneys=0;
    let numberOfUnhelthyKidney=0;

    
    
    for(let i=0;i<numberOfKidney;i++)
    {
        if(johnKidney.helthy)
        {
            numberOfHelthyKidneys++;
        }
    }
    numberOfUnhelthyKidney=numberOfKidney-numberOfHelthyKidneys;

    

    res.json({
        "total kidney":numberOfKidney,
        "Helthy Kidney":numberOfHelthyKidneys,
        "unhelthy kidney":numberOfUnhelthyKidney
    })

    
})

app.post('/',function(req,res){
    const isHelthy=req.body.isHelthy

    users[0].JohnKidneys.push(isHelthy);
    res.json({
        "add":"done"
    })

})

app.put('/',function(req,res){
    for(let i=0;i<users[0].JohnKidneys.length;i++)
    {
        users[0].JohnKidneys.helthy="true";
    }

    res.json({})
})

app.delete('/',function(req,res){
    const newarray=[];

    for(let i=0;i<users[0].JohnKidneys;i++)
    {
        if(JohnKidneys.helthy=="true")
        {
            newarray.push({
                helthy:"true"
            })
        }
    }
    users[0].JohnKidneys=newarray
    res.json({
        "msg":"Done"
    })
})
app.listen(3001,()=>{
    console.log('server runnning');
    

})
