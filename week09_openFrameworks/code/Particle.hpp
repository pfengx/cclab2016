//
//  Particle.hpp
//  particleSystem
//
//  Created by peterobbin on 10/30/16.
//
//

#pragma once
#include "ofMain.h"

class Particle{
public:
    // create constructors, constructors initialize the class, they take parameters but don't have a return type, they return the class itself
    Particle(ofVec2f pos);
    
    void update(float multiplier);
    void draw();
    void applyForce(ofVec2f force);
    void resetForces();
    
    ofVec2f mPosition, mVelocity, mAcceleration;
    float mLifeSpan;
};
