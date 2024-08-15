import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                All Project 
            </h2>
            <p className='text-gray-600 my-2'>
            Check out these sources code with all Projects
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://github.com/Kushwahadheeraj" target='_blank' rel='noopener noreferrer'>
                    GitHub
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://firebasestorage.googleapis.com/v0/b/mern-blog-95d9d.appspot.com/o/GitHub.jpg?alt=media&token=a536c010-0144-480c-a2bd-bd7568dc3284" />
        </div>
    </div>
  )
}