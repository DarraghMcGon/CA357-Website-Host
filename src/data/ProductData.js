import macbookAir from '../assets/products/macbook-air.png';
import gProWireless from '../assets/products/g-pro-wireless.png';
import hpEnvy from '../assets/products/hp-envy.png';
import inspiron15 from '../assets/products/inspiron-15.png';
import magicMouse from '../assets/products/magic-mouse.png';
import dellOptiplex from '../assets/products/dell-optiplex.png';

// https://stackoverflow.com/questions/50113850/import-const-array-react/50113920
export const products = [
    {
        title: "Macbook Air",
        type: "Laptops",
        image: macbookAir,
        brand: "Apple",
        rating: 4,
        desc: "Available in silver, space grey and gold, the latest MacBook Air features a stunning Retina display with True Tone technology, Touch ID, a backlit Magic Keyboard and a Force Touch trackpad — all housed in a thin and light iconic wedge design made from 100 per cent recycled aluminium. With an 11-hour battery life, it’s a do-it-all notebook that goes all day long.",
        price: 1300
    },
    {
        title: "HP Envy",
        type: "Laptops",
        image: hpEnvy,
        brand: "HP",
        rating: 5,
        desc: "Ultra portable 13” and 17” diagonal laptops let you see more for an incredible immersive experience, while allowing you to create from anywhere.Creative possibilities are endless with the power of the latest multi-core Intel® Core™ processors and NVIDIA™ GeForce® MX350 graphics.",
        price: 1500
    },
    {
        title: "Magic Mouse",
        type: "Mice",
        image: magicMouse,
        brand: "Apple",
        rating: 2,
        desc: "Magic Mouse 2 is completely rechargeable, so you’ll eliminate the use of traditional batteries. It’s lighter, has fewer moving parts thanks to its built-in battery and continuous bottom shell, and has an optimized foot design all helping Magic Mouse 2 track easier and move with less resistance across your desk. And the Multi-Touch surface allows you to perform simple gestures such as swiping between web pages and scrolling through documents. Magic Mouse 2 is ready to go straight out of the box and pairs automatically with your Mac.",
        price: 120
    },
    {
        title: "Dell Inspiron 15",
        type: "Laptops",
        image: inspiron15,
        brand: "Dell",
        rating: 4,
        desc: "The ultimate personal theater experience. CinemaColour - Visuals appear every bit as lifelike as the world around you. Richer, more vibrant color and details enabled by Dell Colour Profiles. CinemaSound - Waves MaxxAudio® Pro boosts volume and clarifies every tone, so you experience studio-quality sound. CinemaStream - SmartByte channels maximum bandwidth to your videos or music for a seamless, stutter-free experience. Make the most of every day. Capable processors: AMD Ryzen Mobile Processors with Radeon Vega Graphics deliver incredible responsiveness and smooth, seamless multitasking",
        price: 1200
    },
    {
        title: "Logitech G Pro Wireless",
        type: "Mice",
        image: gProWireless,
        brand: "Logitech",
        rating: 5,
        desc: "The Logitech G Pro Wireless is an excellent wireless gaming mouse that's versatile enough for office use. It has very good performance and is customizable within the companion app. Its size and shape are nice and comfortable, which is suitable for almost every hand size and grip, other than small hands using the fingertip grip. Also, it has an ambidextrous design, and has very low click latency when using it wired or wirelessly. That said, using it with its cable creates some drag. Also, it only has two additional buttons on each side, which may not be enough for competitive MMO gamers.",
        price: 80
    },
    {
        title: "Dell Optiplex",
        type: "Desktops",
        image: dellOptiplex,
        brand: "Dell",
        rating: `1`,
        desc: "The Dell Opitplex is the ideal tower for any first time computer user. With its ease of use and aceesibility the Optiplex is one of Dell's leading and best selling devices on the current market. ",
        price: 2100
    }
]

export default {
    products,
}