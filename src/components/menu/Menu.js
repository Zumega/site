import React from 'react';
import './menu.scss';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>
                    Projects
                    <ul>
                        <li>Character Sheet</li>
                        <li>Billboard</li>
                    </ul>
                </li>
                <li>
                    Images
                </li>
                <li>
                    Links
                    <ul>
                        <li>Slashdot</li>
                        <li>Hack A Day</li>
                        <li>Uncrate</li>
                        <li>Rooster Teeth</li>
                        <li>Achievement Hunter</li>
                    </ul>
                </li>
                <li>
                    About
                    <ul>
                        <li>Resume</li>
                        <li>Linked In</li>
                        <li>GitHub</li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
