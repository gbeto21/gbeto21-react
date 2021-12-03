import React from 'react'
import './Skills.css'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Skills = () => {

    return (
        <div>
            <div style={{ display: 'block', width: 700, padding: 30 }}>
                <Tabs defaultActiveKey="first">
                    <Tab eventKey="first" title="Dashboard">
                        Hii, I am 1st tab content
                    </Tab>
                    <Tab eventKey="second" title="Setting">
                        Hii, I am 2nd tab content
                    </Tab>
                    <Tab eventKey="third" title="Aboutus">
                        Hii, I am 3rd tab content
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Skills
