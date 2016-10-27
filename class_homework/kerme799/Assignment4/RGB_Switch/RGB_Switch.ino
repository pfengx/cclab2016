/*
  Button --> Switch

 Turns on and off a light emitting diode(LED) connected to digital
 pin 13, when pressing a pushbutton attached to pin 2.

 The circuit:
 * LED attached from pin 13 to ground
 * pushbutton attached to pin 2 from +5V
 * 10K resistor attached to pin 2 from ground

 Based on example
 by DojoDave <http://www.0j0.org>
 modified 30 Aug 2011 by Tom Igoe

 Added State Change/Switch, RGB led 

 */

// constants won't change. They're used here to
// set pin numbers:
const int buttonPin = 2;     // the number of the pushbutton pin (input)
const int ledPin =  13;      // the number of the LED pin (output)

// variables will change:
int currentState = HIGH;    // output pin current state
int buttonState;            // variable for reading the pushbutton status / input pin
int previousState = LOW;    // input pin previous reading

void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed.
  // if it is, the buttonState is HIGH & previously off
  if (buttonState == HIGH && previousState == LOW) {
    // turn LED on:
    if (currentState == HIGH)
    // push button, then turn LED off
      currentState = LOW;
    // otherwise, if LED off, button to turn on 
    else 
      currentState = HIGH;
  }            

    digitalWrite(ledPin, currentState);

    previousState = buttonState;
}
