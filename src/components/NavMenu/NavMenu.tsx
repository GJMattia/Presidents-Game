import './NavMenu.css';

export default function NavMenu() {


    return (
        <div className='NavMenu'>
            <div className='NavMenuItem'>
                <ul className='NavList'>
                    <li>Something</li>
                    <li>another something</li>
                    <li>a third something</li>
                    <li>zaandarbrow</li>
                    <li>something about it</li>
                </ul>
            </div>
            <div className='NavMenuItem'>
                <h1>USA website</h1>
                <p>there is something going on here, it is cool</p>
                <button>the button for buttons</button>
            </div>
            <div className='NavMenuItem'>
                <h1>want to donate money?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quidem laboriosam sapiente tempora mollitia nemo iusto placeat maiores veritatis deserunt.</p>
                <button>the button for buttons</button>
            </div>
        </div>
    )
}