import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import RamImage from '../../assets/Ram-Image.jpg'
import ProcessorImage from '../../assets/Processor-Image.jpg'
import StorageImage from '../../assets/Storage-Image.jpg'
import GraphicsImage from '../../assets/Graphics-Card.png'

function Cards() {
    return (
      <div className='cards'>
        <h1>Everything you need to find a laptop you’ll love.</h1>
        <p style={{color: "grey", textAlign: 'center'}}> In this guide we cover the most important things to consider before buying a new laptop, along with all the information you need to make sure your new laptop does exactly what you want it to do. If you still have questions or want to see the latest features and tech for yourself, why not call into your nearest store and speak to one of our colleagues, who will happily help you find the perfect laptop.</p>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className="cards__items">
                <CardItem
                    src={RamImage}
                    text='Find out what Ram is best for you!'
                    label='Ram'
                />
                <CardItem 
                    src={ProcessorImage}
                    text='Find out what type of processor you need!'
                    label='Processor'
                />
                <CardItem 
                    src={StorageImage}
                    text='How much storage do you really need?'
                    label='Storage'
                />
                <CardItem 
                    src={GraphicsImage}
                    text='Lets find out what kind of graphics you need!'
                    label='Graphics'
                />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;