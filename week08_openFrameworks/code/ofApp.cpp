#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofSetBackgroundColor(0, 0, 0);
    
    // set initial circle radius
    mCircleRadius = 30;
    
    // set initial position
    mPos = ofVec2f(ofGetWindowWidth() * 0.5,ofGetWindowHeight() * 0.5);
    
    // set friction
    mFriction = 0.99;
    
    // no velocity at the beginning
    mVelocity = ofVec2f(0);
    
    // no force at beginning
    mAcceleration = ofVec2f(0);
}

//--------------------------------------------------------------
void ofApp::update(){
    // reduce velocity according to friction
    if(mVelocity.length() > 0) {
        mVelocity *= ofVec2f(mFriction);
        
        // when velocity is too small, we don't want to update our velocity
        if (mVelocity.length() < MIN_VELOCITY) {
            mVelocity = ofVec2f(0);
        }
    }

    // update position of ball according to velocity
    if (mVelocity.length() > 0) {
        mPos += mVelocity;
        
        // circle size represent velocity
        mCircleRadius = 30 + mVelocity.length() * 30;
    }
    
    // bring our ball back to the stage
    if(mPos.x < 0) {
        mPos.x = ofGetWindowWidth();
    }
    if(mPos.x > ofGetWindowWidth()) {
        mPos.x = 0;
    }
    if(mPos.y < 0) {
        mPos.y = ofGetWindowHeight();
    }
    if(mPos.y > ofGetWindowHeight()) {
        mPos.y = 0;
    }
}

//--------------------------------------------------------------
void ofApp::draw(){
//    ofSetColor(14, 255, 10);
//    ofSetCircleResolution(50);
//    ofDrawCircle(ofVec2f(500,500),100);
    
    ofSetColor(255,0,0);
    ofSetCircleResolution(50);
    ofDrawCircle(mPos, mCircleRadius);
    
    ofSetColor(255,255,255);
    // ofDrawBitmapString("Text you want to show", int x, it y, int z);
    ofDrawBitmapString("x: " + ofToString(mPos.x) + " y:" + ofToString(mPos.y), mPos + ofVec2f(40, -20));
    
    // print stuff to console
    cout << mPos << endl;
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){
    // put mouse position into a vector, local variable
    ofVec2f mousePos = ofVec2f(x, y);
    
    // calculate acceleration
    mAcceleration = mPos - mousePos;
    
    // normalize acceleration
    mAcceleration = mAcceleration.getNormalized();
    
    // apply acceleration (direction) to velocity
    mVelocity += mAcceleration;
}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
