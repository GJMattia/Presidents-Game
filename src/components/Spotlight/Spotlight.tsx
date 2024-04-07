import './Spotlight.css';

interface Props {
    img: string;
    name: string;
    term: string;
}

export default function Spotlight({ img, name, term }: Props) {
    return (

        <div className='Spotlight'>
            <img className='Portrait' src={img} />
            <h1 className='PresidentTitle'>{name}</h1>
            {/* <h1>{current + 1}</h1> */}
        </div>

    )
}