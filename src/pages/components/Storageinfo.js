import React from 'react';
import './infosection.css';

function StorageInfo() {
    return (
    <div class="info">
        <div class="info_member">
        <h3>Storage</h3>
        <p class="role">Storage space for files and applications</p>
        <p>Storage refers to the amount of space your laptop has for software, documents and everything else you save. There are four main types of storage available in laptops; HDD, SSD, SSHD and eMMC drives. Storage tends to be very important to consider if you tend to use you pc for gaming or app development.</p>
        <dl>
            <dt>What is a hard disc drive (HDD)?</dt>
            <dd>A hard disc drive is the most common type of laptop storage. Laptops are available with a wide range of different HDD capacities to suit any requirement. If you want to save a lot of films, music and other large files, look for a laptop with at least a 1 TB hard drive.</dd>
            <dt>What is a solid-state drive (SSD)?</dt>
            <dd>Unlike HDDs, solid-state drives have no moving parts. While they have lower capacities than normal hard drives they’re much thinner and run much faster, making them ideal for high-performance computing. However, they are more expensive than other drives, so tend to be featured on more premium or performance-focused laptops.</dd>
            <dt>What is a solid-state hybrid drive (SSHD)?</dt>
            <dd>Solid-state hybrid drives combine the capacity of a HDD with the performance of an SSD. They work by storing your most accessed information in a solid-state memory cache so that it can be reached much quicker when needed. This gives you faster loading, saving and booting so you can enjoy quicker and more responsive computing. They aren’t quite as fast as solid-state drives but have higher capacities and don’t cost as much, making them the ideal compromise for everyday computing.</dd>
            <dt>What is an embedded multi-media card (eMMC)?</dt>
            <dd>An embedded multi-media card is flash storage (the same technology used in memory sticks) that’s attached to a device’s motherboard. eMMC storage is most common on tablets, but is featured on some laptops, 2 in 1s and Chromebooks. It’s a great solution for smaller devices, although it doesn’t offer the capacity and performance benefits that other storage devices do.</dd>
        </dl>
        </div>
    </div>
    );
}
//Information found at https://www.currys.ie/ieen/laptop-buying-guide-550-commercial.html
export default StorageInfo;