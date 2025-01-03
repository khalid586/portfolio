import React from 'react'

function Banner() {
  return (
    <div className='p-4 py-16' id = "about">
        <div className='md:flex justify-between'>
            <div className='pt-8'>
                <p className='text-4xl font-bold flex items-center justify-center'><img src="hand wave.gif" width={100} alt="" /> Hi, I am Khalid Abdullah </p>
                <p className='text-center text-xl font-semibold'>Software Engineer @<span className='font-extrabold'>Dotlines</span></p>

                {/* <div className='flex-col items-center md:px-32'>
                    <p className='md:px-16  py-2'>Computer Science and Engineering graduate having 3+ years of experience of solving problems and competing in National competitions like ICPC and IUPC
                    and 1 year of experience of developing web applications.
                    </p>
                    <p className='text-gray-700 md:px-16  py-2 font-semibold'>Software Engineer @<span className='font-bold text-black'>Dotlines</span>.</p>
                </div> */}

                <div className="flex space-x-4 justify-center my-6">
                    <a href="https://www.linkedin.com/in/khalid-abdullah-47b655190/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 flex">
                    {/* LinkedIn Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19.428 2H4.572C2.052 2 0 4.052 0 6.572v10.856C0 19.948 2.052 22 4.572 22h14.856C21.948 22 24 19.948 24 17.428V6.572C24 4.052 21.948 2 19.428 2zM8.367 18.048H5.758V10.576h2.609v7.472zm-1.304-8.558c-.84 0-1.526-.688-1.526-1.54 0-.851.686-1.538 1.526-1.538s1.527.687 1.527 1.538c0 .852-.687 1.54-1.527 1.54zm13.601 8.558h-2.609v-3.96c0-2.211-.445-3.827-2.363-3.827-1.853 0-2.619 1.172-2.619 3.44v4.348h-2.609V10.576h2.609v1.014c.346-.536.95-1.304 2.347-1.304 1.716 0 3.038 1.086 3.038 3.454v5.308z" />
                    </svg>
                    <p className='font-semibold text-blue-600 ml-1'>linkedin</p>
                    </a>

                    <a href="https://github.com/khalid586" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 flex">
                    {/* GitHub Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.388.6.111.82-.26.82-.578 0-.285-.01-1.239-.015-2.243-3.338.724-4.043-1.606-4.043-1.606-.548-1.387-1.338-1.758-1.338-1.758-1.093-.746.083-.73.083-.73 1.21.085 1.843 1.239 1.843 1.239 1.073 1.839 2.809 1.306 3.493.999.108-.776.42-1.306.764-1.605-2.665-.303-5.466-1.332-5.466-5.925 0-1.313.469-2.392 1.236-3.24-.124-.303-.537-1.523.116-3.173 0 0 1.008-.322 3.303 1.23.96-.267 1.99-.4 3.006-.404 1.016.004 2.046.137 3.006.404 2.295-1.552 3.303-1.23 3.303-1.23.653 1.65.241 2.87.118 3.173.769.848 1.236 1.927 1.236 3.24 0 4.605-2.805 5.619-5.465 5.922.43.373.816 1.104.816 2.223 0 1.605-.015 2.906-.015 3.304 0 .32.219.693.825.578A12.022 12.022 0 0024 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    <p className='font-semibold text-blue-600 ml-1'>github</p>
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=100008925970800" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 flex">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.917.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" fill="#1877F2"/>
                            <path d="M16.896 24v-9.294h3.12l.467-3.622h-3.587v-2.31c0-1.048.291-1.763 1.795-1.763l1.917-.001v-3.24c-.332-.043-1.47-.143-2.795-.143-2.766 0-4.659 1.688-4.659 4.788v2.687H9.692v3.622h3.128V24h4.076z" fill="#FFF"/>
                        </svg>
                        <p className='font-semibold text-blue-600 ml-1'>facebook</p>

                    </a>
                </div>
                <div className='text-center py-4'>
                    <a className=' bg-red-500 px-4 py-2 rounded-btn text-white font-semibold'
                        href="https://drive.google.com/uc?export=download&id=1YVUVm7J25rVit7gPR744tloDiokBKc2L" 
                        download
                    >
                        Download Resume
                    </a>
                </div>
            </div>
            <img src="khalid abdullah.jpg" alt="Khalid Abdullah" className='md:w-1/5 rounded-box   text-center border-l-4 border-b-4 border-2 border-red-500'/>
        </div>
    </div>
  )
}

export default Banner