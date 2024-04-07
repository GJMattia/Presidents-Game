import './Results.css';

interface Props {
    time: number
};

export default function Results({ time }: Props) {
    return (
        <div className='Results'>
            <h1>Results</h1>
            <h3>You got  wrong.</h3>
            <h2>You did it in {time / 1000} seconds</h2>

        </div>
    )
}