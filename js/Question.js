class Question {

  constructor() {
    this.title = createElement('h1')
    this.input = createInput("").attribute("placeholder", "Enter your name");
   //Create a input box to enter the number
   this.input = createInput("").attribute("placeholder", "Enter your option");
   

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.Question = createElement("h3");
    this.Option1 = createElement("h4");
    this.Option2 = createElement("h4");
    this.Option3 = createElement("h4");
    this.Option4 = createElement("h4");


    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.Question.html("Question -: Who is the president of America");
    this.Question.position(200, 100);

    this.Option1.html("Narendra Modi");
    this.Option1.position(200, 125);
    this.Option2.html("Narendra Modi");
    this.Option2.position(200, 150);
    this.Option3.html("Narendra Modi");
    this.Option3.position(200, 175);
    this.Option4.html("Narendra Modi");
    this.Option4.position(200, 200);



    this.input.position(400, 250);
    this.input1.position(150, 250);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thanks, Your answer has been submitted");
      this.message.position(200, 325);
    })


  }
}
