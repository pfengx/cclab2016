/* Force Sensor + Servo Test
 
Connect one end of the Force Sensitive Resistor to power, the other end to Analog 0.
Then connect one end of a 10KΩ resistor from Analog 0 to ground, and a servo to D9.
Build Instructions on Make Projects: http://makeprojects.com/Project/Control+a+Servo+with+a+Force-Sensitive+Resistor/3269/1#.UQw251pdfNo

took code from above/Make Magazine/eweinhoffer

adopted class exercise/code

switched servo to piezo sounder
piezo sounder to play tunes, adopted from: https://learn.adafruit.com/adafruit-arduino-lesson-10-making-sounds/playing-a-scale?view=all

*/

//#include <Servo.h>
//
//Servo myservo;

int speakerPin = 9;
int outputValue;          //ouput value
int analogInPin = 0;    // pin; pin the sensor and 10k pulldown resistor
int sensorValue;     // force; the analog reading from the FSR resistor divider
int numTones = 10;
int tones[] = {261, 277, 294, 311, 330, 349, 370, 392, 415, 440};
//            mid C  C#   D    D#   E    F    F#   G    G#   A
 
void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(9600);   
  //  myservo.attach(9);  // pin the servo is connected to
  for (int i = 0; i < numTones; i++) {
    tone(speakerPin, tones[i]);
    delay(500);
  }
  noTone(speakerPin);
}
 
void loop() {
  // read the analog in value:
  sensorValue = analogRead(analogInPin);  // Reads the FSR
  outputValue = map(sensorValue, 0, 1023, 0, 179); // Scales the force reading to degrees for servo control

  // print the results to the serial monitor: 
  Serial.print("Analog reading = "); 
  Serial.println(sensorValue); // This will print the raw force value
  Serial.print("Adjusted reading = ");
  Serial.println(outputValue); // This will print the adjusted servo reading 
  
  // Write the new angle to the servo
//  myservo.write(pos); 
  
  // Delay 2 milliseconds before taking another reading
  delay(2); 
}
