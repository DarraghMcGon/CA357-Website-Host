import React from 'react';
import './components/infosection.css';
import Cards from './components/Cards'
import RamInfo from './components/RamInfo'
import StorageInfo from './components/Storageinfo'
import ProcessorInfo from './components/ProcessorInfo'
import GraphicsInfo from './components/GraphicsInfo'

function InfoPage() {
    return (
        <>
            <Cards />
            <div className="InfoWrapper">
            <RamInfo />
            <StorageInfo />
            <ProcessorInfo />
            <GraphicsInfo />
            </div>
        </>
    )
}

export default InfoPage;
