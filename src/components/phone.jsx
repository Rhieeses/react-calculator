export default function Phone({ children }) {
	return (
		<div className='w-full h-full flex justify-center items-center'>
			<div className='w-[23%] h-[85%] border-[0.4rem] border-cyan-600 rounded-[3.5rem] shadow-[0_10px_40px_12px_rgba(255,255,255,0.4)] bg-white'>
				<div className='relative h-full w-full'>
					<div className='absolute island w-full flex items-center justify-center h-[2rem] m-3 ml-0 mr-0'>
						<div className='absolute top-0  bg-black w-[35%] h-full rounded-[2rem] text-black'>
							s
						</div>
					</div>
					{children}
				</div>
			</div>
		</div>
	);
}
