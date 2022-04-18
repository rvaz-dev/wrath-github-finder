import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
    return <div className='hero h-screen'>
        <div className='text-center hero-content'>
            <div className='max-w-lg'>
                <div className='text-8xl font-bold mb-8'>
                    Oops!
                </div>
                <p className='text-5xl text-gray-400 mb-8'>
                    404 Page not found!
                </p>
                <Link to='/' className='btn btn-outline btn-secondary btn-lg'>
                    <FaHome className='mr-2' />
                    Back to Home
                </Link>
            </div>
        </div>
    </div>
}

export default NotFound
