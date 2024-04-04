import './Results.css';

interface Props {
    wrong: number,
    time: number
};

export default function Results({ wrong }: Props, { time }: Props) {
    return (
        <div className='Results'>
            <h1>Results</h1>
            <h3>You got {wrong} wrong.</h3>
            <h2>You did it in {time} seconds</h2>

        </div>
    )
}