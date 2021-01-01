import React from 'react';
import './infosection.css';

function Information() {
    return (
    <div class="info">
        <div class="info_member">
        <h3>Graphics</h3>
        <p class="role">How well the picture on your screen will look</p>
        <p>A Graphics Card is a piece of computer hardware that produces the image you see on a monitor. The Graphics Card is responsible for rendering an image to your monitor, it does this by converting data into a signal your monitor can understand.</p>
        <dl>
            <dt>Do I need a high end Graphics card?</dt>
            <dd>If you plan to do any gaming on your pc or video editing using softwares like CAD, then you will definietely need a good graphics card. In this case you can consider looking for  one of the following to be in your PC</dd>
                <ul>
                <li>Nvidia GeForce GTX 1660 Ti</li>
                <li>GTX 1660 Super</li>
                <li>GTX 1660</li>
                <li>AMD Radeon RX 5600 XT</li>
                </ul>

            <dd>There are much better graphics cards out there but these shold get you by if you need to do some hard work and are on a budget. On the other hand if you arent looking to do anything extreme and just want to browse the internet then any of these cards here should be fine.</dd>
                <ul>
                <li>Nvidia GeForce GT 1030</li>
                <li>AMD Radeon RX 550</li>
                <li>Nvidia GeForce GTX 1650 Super</li>
                <li>Nvidia GTX 1650</li>
                <li>AMD Radeon RX 5500 XT 4GB/8GB</li>
                </ul>
            <dt>Does my monitor  matter?</dt>
            <dd>
                <ul>
                <li class='graphics'>Consider your refresh rate.</li><br/>If your monitor has triple-digit refresh rates, you'll need a powerful card and processor to reach its full potential. Alternatively, if your monitor tops out at 60Hz and 1080p, there's no point in paying extra for a powerful card that pushes pixels faster than your display can keep up with.<br/><br/>
                <li class='graphics'>Match your monitor resolution</li><br/>Many mainstream cards are sufficient for gaming at 1080p resolutions at between 30-60 fps, but you'll need a high-end card for resolutions at or near 4K resolution with high in-game settings on the most demanding titles.<br/>
                <br/>
                </ul>
            </dd>
        </dl>
        </div>
    </div>
   );
}
// Information found at https://www.ebuyer.com/blog/2015/04/what-is-a-graphics-card/
export default Information;