var Quotes =
[

        {          
             quote: "“كَانَ الرَّبُّ مَعَ يُوسُفَ فَكَانَ رَجُلًا نَاجِحًا”",
             source: "― (سفر التكوين 39: 2)"

        },



{
        quote:" “لأن الله لم يعطناروح الفشل بل روح المحبة و القوة و النصح”",
        source:"رسالة تيموثاوس الثانية 1: 7 "

},


{

        quote:"“الرَّبُّ رَاعِيَّ فَلاَ يُعْوِزُنِي شَيْءٌ”",
        source:"سفر المزامير 23: 1"
},





{
        quote:"“لرَّبُّ نُورِي وَخَلاَصِي، مِمَّنْ أَخَافُ؟ الرَّبُّ حِصْنُ حَيَاتِي، مِمَّنْ أَرْتَعِبُ؟”",
        source:"سفر المزامير 27: 1"
},



{
        quote:"“انْتَظِرِ الرَّبَّ. لِيَتَشَدَّدْ وَلْيَتَشَجَّعْ قَلْبُكَ، وَانْتَظِرِ الرَّبَّ”",
        source:"سفر المزامير 27: 14"
},





{
        quote:"“الرَّبُّ يَهْتَمُّ بِي. عَوْنِي وَمُنْقِذِي أَنْتَ. يَا إِلهِي لاَ تُبْطِئْ”",
        source:" سفر المزامير 40: 17"
},



{
        quote:"“عَلَى اللهِ تَوَكَّلْتُ فَلاَ أَخَافُ. مَاذَا يَصْنَعُهُ بِي الإِنْسَانُ؟”",
        source:"سفر المزامير 56: 11"
},



{
        quote:"“الرَّبُّ لِي فَلاَ أَخَافُ. مَاذَا يَصْنَعُ بِي الإِنْسَانُ؟”",
        source:" سفر المزامير 118: 6"
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
        
        
        
        

