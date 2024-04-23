import './NavMenu.css';
import Flag from '../../assets/images/Flag.webp';
import Eagle from '../../assets/images/eagle.png';
import gm from '../../assets/images/gm.png';
interface Props {
    menu: boolean;
}

export default function NavMenu({ menu }: Props) {


    return (
        <div className={`NavMenu ${menu ? 'NavMenuOpen' : ''}`}>
            <div className={`NavMenuItem ${menu ? 'NavMenuItemOpen' : ''}`}>
                <ul className='NavList'>
                    <li><a href='https://www.whitehouse.gov/' target='_blank'>The White House</a></li>
                    <li><a href='https://www.usa.gov/about-the-us' target='_blank'>USA.gov</a></li>
                    <li><a href='https://en.wikipedia.org/wiki/United_States' target='_blank'>USA Wikipedia</a></li>
                    <li><a href='https://www.usdebtclock.org/' target='_blank'>USA Debt Clock</a></li>
                    <li><a href='https://www.timetemperature.com/tzus/time_zone.shtml' target='_blank'>USA Time Zones</a></li>
                    <li><a href='https://geology.com/world/the-united-states-of-america-satellite-image.shtml' target='_blank'>Map of the USA</a></li>
                </ul>
            </div>
            <div className={`NavMenuItem ${menu ? 'NavMenuItemOpen' : ''}`}>
                <img className='MenuFlag' src={Flag} />
                <h1>The United States</h1>
                <img className='MenuFlag Eagle' src={Eagle} />
                <p>The best country in the entire world.</p>
            </div>
            <div className={`NavMenuItem ${menu ? 'NavMenuItemOpen' : ''}`}>
                <h1>CREATED BY GREG MATTIA</h1>
                <p>Web Developer</p>
                <img className='MenuFlag Eagle' src={gm} />
            </div>
        </div>
    )
}