<--------------Calculator--------------------->
[X] h1 with 'Server Side Calculator' inside

[X] 2 input value type number elements 

    {   } make '+' button
        [   ] click listener for button
        [   ] new function addResults

    {   } make '-' button
        [   ] click listener for button
        [   ] new function subtractResults

    {   } make '*' button
        [   ] click listener for button
        [   ] new function multiplyResults

    {   } make '/' button
        [   ] click listener for button
        [   ] new function DivideResults

    {   } make '=' button 
        [   ] click listener for button
        [   ] new function sumOfValues

        [   ] when '=' clicked bundle inputs into new object

        [   ] send new object to server via post
        [   ] into empty array on server side
       
    [   ] make 'C' button
        [   ] that clears input fields
    
<-------------ServerSideLogic----------------->

server side logic should handle (+, - , * , /)
    [   ] POST

    [   ] GET req

    [   ] send via  $.ajax  back message 'ok' once calculation complete

<--------------------History------------------>

[   ] create variable named solutionHistory to store a record of all solutions entered

[   ] append to DOM a 'ul' with some kind of id

    [   ] use jquery to target the previous calculations 

    [   ] append calculations to DOM useing GET request

    [   ] update list when new calc is made

*** NOTE: History should exist even after refreshing the page. ***