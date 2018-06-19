# Intro
 * Who am I
    
    Hello my name is Hristiyan, im Javascript enthusiast, probably like most of you guys. Right now I'm primary using Angular, but I also have some experience  with React and Node. Overall in the past year and a half i've been all around the js ecosystem, having fun with various libraries, framewrks and stuff.

 * What is this talk about

    Today I'm standing here, in front of you, wanting to share some of the knowledge i've gained along my way so far in the js world, hoping that i will help some of you to find the answer to the eternal question in js which is 'What is `this`?'  So 'Lets talk about `this`' and define what is `this` in js. 


 * Identigiyng thre problem of the topic

    The main problem whit defining `this` and what exactly is `this` for most new js developers (which usualy have some OOP language background, for example like C#) comes from the fact that `this` points to the class in which `this` is used, in other words `this` points to itslef.
    And that way of thinking is mostly right as long as we dont add some function calls left and right in the mix, and the `this` keyword magically becomes something like `undefined`, `window` (TODO check what happens in node) or whatever.  In  other words the fun part starts here. This will be mostly a demo based talk, so i will appriciate some life debugers if the demo goes south :D


# Main topic
 * What is `this` in js

    So now lets explore the different posibilities for the `this` keyword.
    (Disclaimer we wont dig too much in object creation)


 * Diferences between function context and function call site
 * Why it is usefull to use this - pros and cons
 * Overview of call and apply
 * Example in node
 * Example in vanila js with the DOM
 * Example with React
 * Example in Angular
 * Arrow function