import './Home.css';
import Cities from '../../assets/videos/Cities2.mov';


export default function Home() {

    return (
        <div className='Home'>
            <video className='Cities' autoPlay loop muted>
                <source src={Cities} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}