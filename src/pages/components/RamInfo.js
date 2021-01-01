import React from 'react';
import './infosection.css';

function RamInfo() {
    return (
    <div id='RamInfo' class="info">
    <h1>Everything you need to know about buying a PC</h1>
        <div class="info_member">
        <h3>Ram</h3>
        <p class="role">Computer Efficiency with multiple apps</p>
        <p>Random-access memory (RAM) is an important spec to consider if you’re looking for a high-performance PC. It’s worth noting that RAM has nothing to do with the amount of documents you can store on your laptop - that’s the role of the storage device.</p>
        <dl>
            <dt>What does memory (RAM) do?</dt>
            <dd>Before they reach the processor computing tasks are stored in the RAM, where the processor picks them up and makes them happen. More RAM allows the processor to take on more at once - vital if you use demanding software.</dd>
            <dt>How much memory (RAM) do I need?</dt>
            <dd>Below is the amount of RAM we recommend for different activities. If you’re unsure about whether you need a larger amount or not, more RAM improves the general performance of your PC along with being able to handle more demanding software, so you’ll never lose anything going for more RAM.</dd>
        </dl>
        <table class="tstyle">
            <tr>
                <td>Browsing the web<br/>Updating social media<br/>Watching video clips</td>
                <td class="gigs">4 GB and over</td>
            </tr>
            <tr>
                <td>Researching and writing essays<br/>Creating spreadsheets<br/>Working on presentations and other office work</td>
                <td class="gigs">6 GB and over</td>
            </tr>
            <tr>
                <td>Streaming HD films<br/>Editing photos - hobby<br/>Editing videos - hobby<br/>Music production - hobby<br/>Gaming - casual</td>
                <td class="gigs">8 GB and over</td>
            </tr>
            <tr>
                <td>Graphic design<br/>Editing photos - professional<br/>Editing videos - professional<br/>Music production - professional<br/>Graphic design - professional<br/>Gaming - enthusiast<br/>CAD design</td>
                <td class="gigs">16 GB and over</td>
            </tr>
        </table>
        </div>
    </div>
   );
}
//Information found at https://www.currys.ie/ieen/laptop-buying-guide-550-commercial.html
export default RamInfo;