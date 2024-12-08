import { useState, useEffect } from 'react';

export const Numbers = ({ number, functions }) => {
	return (
		<div
			className='flex items-center justify-center p-3 cursor-pointer active:text-gray-500 select-none'
			onClick={() => functions(number)}>
			<h1 className='font-semibold text-2xl '>{number}</h1>
		</div>
	);
};

export const Operations = ({ Operation, functions }) => {
	return (
		<div
			className='flex items-center justify-center p-3 cursor-pointer select-none'
			onClick={() => functions(Operation)}>
			<h1 className='font-semibold text-2xl text-orange-500 active:text-orange-800'>
				{Operation}
			</h1>
		</div>
	);
};

export default function Numpads({ results, calculate }) {
	const [input, setInput] = useState('');
	const [answer, setAnswer] = useState('');

	//input
	const handleInput = (value) => {
		setInput((prev) => prev + value);
	};

	//clear
	const handleClear = () => {
		setInput('');
		setAnswer('');
		console.log(input, answer);
	};

	const handleBackspace = () => {
		setInput((prev) => prev.slice(0, prev.length - 1));
	};

	const handleCalculate = () => {
		const calculate = eval(input);
		setAnswer(calculate);
	};

	useEffect(() => {
		results(input);
	}, [input, results]);

	useEffect(() => {
		calculate(answer);
	}, [answer, calculate]);

	return (
		<div className='grid grid-cols-4 h-full'>
			{''}

			<Operations
				Operation='C'
				functions={handleClear}
			/>

			<div
				className='flex items-center justify-center p-3 cursor-pointer select-none'
				onClick={handleBackspace}>
				<span className='material-symbols-outlined text-orange-500 active:text-orange-800'>
					backspace
				</span>
			</div>

			<Operations
				Operation='%'
				functions={handleInput}
			/>
			<Operations
				Operation='/'
				functions={handleInput}
			/>

			{''}

			<Numbers
				number={7}
				functions={handleInput}
			/>

			<Numbers
				number={8}
				functions={handleInput}
			/>
			<Numbers
				number={9}
				functions={handleInput}
			/>

			<Operations
				Operation='*'
				functions={handleInput}
			/>

			{''}

			<Numbers
				number={4}
				functions={handleInput}
			/>
			<Numbers
				number={5}
				functions={handleInput}
			/>

			<Numbers
				number={6}
				functions={handleInput}
			/>

			<Operations
				Operation='-'
				functions={handleInput}
			/>

			{''}

			<Numbers
				number={1}
				functions={handleInput}
			/>
			<Numbers
				number={2}
				functions={handleInput}
			/>
			<Numbers
				number={3}
				functions={handleInput}
			/>

			<Operations
				Operation='+'
				functions={handleInput}
			/>

			{''}

			<Operations
				Operation='+/-'
				functions={handleInput}
			/>

			<Numbers
				number={0}
				functions={handleInput}
			/>

			<Numbers number='.' />

			<div
				className='p-2'
				onClick={handleCalculate}>
				<div className='w-full h-full flex items-center justify-center bg-orange-500 rounded-xl'>
					<h1 className='font-semibold text-5xl text-white'>=</h1>
				</div>
			</div>
		</div>
	);
}
