There are really only two interesting parts to this small app: the event-based Timer class and the basic SVG animation.

The Timer class uses a constructor that accepts optional callbacks for what the timer component should do when the timer starts, what to do on each tick of the timer, and what to do when the timer counts down completely. This should let the basic logic of the timer be re-used to perform arbitrary work when these events fire. Native Javascript getters and setters are used for immediate readability on how the instance can be manipulated. The methods which timer defines, `start`, `tick`, and `pause`, each check for the presence of the optional callback relevant to its work. In their absence nothing breaks, but also no work gets done.

There is one part of the Timer class that is perhaps too coupled to the presentation script, and that is the tick method's interval timing. This was done to easily wire up the SVG animation, but it can be (and should be) refactored to deal with arbitrary events. 

The SVG animation doesn't use any advanced functionality, but it does exploit the `stroke-dashoffset` property to animate the depletion of the timer. Some simple calculation of the circle's perimeter and remaining time determines the depletion amount for each tick to animate the A\*\*le W\*tch-like visual feedback.
