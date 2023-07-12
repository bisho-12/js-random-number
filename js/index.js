var Quotes =
[

        {          
             quote: "“Be yourself; everyone else is already taken.”",
             source: "― Oscar Wilde"

        },



{
        quote:" “So many books, so little time.”",
        source:"― Albert Einstein"

},


{

        quote:"“A room without books is like a body without a soul.”",
        source:"― Marcus Tullius Cicero"
},





{
        quote:"“You only live once, but if you do it right, once is enough.”",
        source:"― Mae West"
},



{
        quote:"“Be the change that you wish to see in the world.”",
        source:"― Mahatma Gandhi"
},





{
        quote:"“In three words I can sum up everything I've learned about life: it goes on.”",
        source:"― Robert Frost"
},



{
        quote:"“If you tell the truth, you don't have to remember anything.”",
        source:"― Mark Twain"
},



{
        quote:"“A friend is someone who knows all about you and still loves you.”",
        source:"―  Elbert Hubbard"
},
]
        
         function newQuotes()
         {
                for (var i = 0; i < Quotes.length; i++)
                {
                       var quoteindex= Math.floor(Math.random()*(Quotes.length))
                       document.getElementById('displayquote').innerHTML=(Quotes[quoteindex].quote)
                       document.getElementById('displayquotewriter').innerHTML=(Quotes[quoteindex].source)
                }
            
         }
        
        
        
        

