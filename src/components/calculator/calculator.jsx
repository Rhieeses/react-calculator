import { useState } from 'react';
import Phone from '../phone';
import Numpads from './numpads';

export const formatNumber = (value) => {
	if (isNaN(value) || value === undefined || value === null) return '';
	return `${value.toLocaleString()}`;
};

export default function Calculator() {
	const [result, setResult] = useState('');
	const [answer, setAnswer] = useState('');

	const handleResults = (data) => {
		setResult(data);
	};

	const handleCalculate = (calculate) => {
		setAnswer(calculate);
	};

	return (
		<Phone>
			<div className='w-full h-full rounded-[3rem] overflow-hidden'>
				<div className='screen bg-gray-300 h-1/2 flex items-end justify-end p-5'>
					<div
						className={`flex ${
							answer ? 'flex-col-reverse' : 'flex-col'
						}  transition-all duration-200 text-end`}>
						<p
							className={`${
								answer ? 'font-bold text-4xl' : 'text-gray-500 text-sm'
							} transition-all duration-200`}>
							{answer ? formatNumber(answer) : ''}
						</p>
						<h1
							className={`font-bold text-4xl ${
								answer ? 'text-sm text-gray-500' : ''
							} transition-all duration-200`}>
							{result ? result : '0'}
						</h1>
					</div>
				</div>
				<div className='w-full h-1/2 p-4'>
					<Numpads
						results={handleResults}
						calculate={handleCalculate}
					/>
				</div>
			</div>
		</Phone>
	);
}

//<span className='material-symbols-outlined'>backspace</span>

//transition-translate duration-200 -translate-y-6 text-gray-500 text-sm
