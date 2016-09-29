const byte ledPin = 13; // Attach LED to pins 13 and 11.
const byte ledPin2 = 11; // These two LEDs will be blinking.
const byte ledPin3 = 10; // This LED is connected to Pin 10 and will light up when the button is pressed.
const byte interruptPin = 2; // Button goes to the Interrupt pin on Pin 2. 
volatile byte state = LOW; 
volatile byte state2 = LOW;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(ledPin2, OUTPUT);
  pinMode(ledPin3, OUTPUT);
  pinMode(interruptPin, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(interruptPin), blink, CHANGE); 
}

void loop() {
    digitalWrite(ledPin, state);
    delay(1000);
    digitalWrite(ledPin2, state);
    delay(1000);
    digitalWrite(ledPin, !state);
    delay(1000);
    digitalWrite(ledPin2, !state);
    delay(1000);
}

void blink() {
  state2 = !state2;
  digitalWrite(ledPin3, state2); 
}
