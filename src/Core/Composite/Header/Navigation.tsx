import React from 'react'

const Navigation = () => {
    return (
        <>
            <div className='ml-6 mt-2'>
                <ul className='flex gap-x-3'>
                    <a href="#" className='hover:text-teal-400'><li>Anasayfa</li></a>
                    <a href="#" className='hover:text-teal-400'><li>Hakkımızda</li></a>
                    <a href="#" className='hover:text-teal-400'><li>Hizmetler</li></a>
                    <a href="#" className='hover:text-teal-400'><li>Yardım</li></a>
                </ul>
            </div>
        </>
    )
}

export default Navigation