import React from 'react';
import './infosection.css';

function Information() {
    return (
    <div class="info">
    <div class="info_member">
        <h3>Processor</h3>
        <p class="role">Computer speed</p>
        <p>The processor is the brain of your laptop. Whenever you move the mouse, open a program, or load a file the processor makes it happen. On our product pages we give you all the information necessary to decide whether a processor is powerful enough for your needs.</p>
        <dl>
            <dt>How many cores do I need?</dt>
            <dd>Every laptop we sell has at least a dual-core processor. This allows it to handle several things at once so you can move quickly between different windows, with more apps and tabs running at once. Quad-core processors are great for running demanding software quickly, such as photo editing and music production programs. Modern creative software is optimised to run best with multi-core setups.</dd>
            <dt>What is the clock speed?</dt>
            <dd>This is measured in GHz, and determines how fast the processor runs. A higher clock speed means your laptop can load software and files faster and that it will run smoother during normal use.<br/><br/>Some processors feature Turbo Boost (Intel®) or Turbo Core (AMD) technology, which increases the speed of the processor to match the task at hand. This means the laptop consumes less power during light computing tasks, which reduces power consumption and increases battery life.</dd>
            <dt>What is the Memory cache?</dt>
            <dd>Before tasks are managed by the processor, they queue up in the memory cache. A bigger memory cache allows the processor to work through demanding tasks quickly. You only really need to worry about this if you plan on running professional-level creative software like Cubase or Photoshop - if you are, look for 4 MB and over.</dd>
        </dl>
        </div>
    </div>
   );
}
// Information found at https://www.currys.ie/ieen/laptop-buying-guide-550-commercial.html
export default Information;