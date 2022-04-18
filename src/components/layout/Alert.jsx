import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

function Alert() {
	const { alert } = useContext(AlertContext)

	return (
		alert !== null && (
			<p className='flex items-start mb-4 space-x-2'>
				{alert.type === 'error' && (
					<div className='alert alert-error'>
						<div>
							<svg
								fill='none'
								viewBox='0 0 24 24'
								className='w-6 h-6 stroke-current mr-3'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
								></path>
							</svg>
							<strong>{alert?.msg}</strong>
						</div>
					</div>
                    // <svg className='w-6 h-6 flex-none mt-0.5'
                    //     fill='none'
                    //     viewBox='0 0 24 24'
                    // >
                    //     <circle cx='12' cy='12' r='12' fill='#FECDD3'></circle>
                    //     <path
                    //         d='M8 8l8 8M16 8l-8 8'
                    //         stroke='#B91C1C'
                    //         strokeWidth='2'
                    //     ></path>
                    // </svg>
                )}
                {/* <p className='flex-1 test-base font-semibold leading-7 text-white'>
                    <strong>{alert.msg}</strong>
                </p> */}
			</p>
		)
	)
}

export default Alert
