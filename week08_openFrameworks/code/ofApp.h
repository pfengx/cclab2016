#pragma once

#include "ofMain.h"

class ofApp : public ofBaseApp{

	public:
		void setup();
		void update();
		void draw();

		void keyPressed(int key);
		void keyReleased(int key);
		void mouseMoved(int x, int y );
		void mouseDragged(int x, int y, int button);
		void mousePressed(int x, int y, int button);
		void mouseReleased(int x, int y, int button);
		void mouseEntered(int x, int y);
		void mouseExited(int x, int y);
		void windowResized(int w, int h);
		void dragEvent(ofDragInfo dragInfo);
		void gotMessage(ofMessage msg);
    
        // circle variables
        float mCircleRadius; // holds our circle size
    
        // physics variables
        ofVec2f mPos; // holds our position
        ofVec2f mVelocity; // holds our speed
        ofVec2f mAcceleration; // holds our direction
        float   mFriction; // this is what slows our ball down, without it, it would keep rolling
    
         // constant variables
         const float MIN_VELOCITY = 0.01;
};
