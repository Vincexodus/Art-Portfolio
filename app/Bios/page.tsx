import Link from 'next/link';
import React from 'react'

const BioPage = () => {
  const currentAge = new Date().getFullYear() - 1998;

  return (
    <div className='w-5/6 mx-auto'>
      <h1 className='text-xl text-center p-5'>Artist Passionate in Architecture & Nature Artworks</h1>
      <div className='flex item-center justify-center'>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure><img src="/images/profile.jpg" alt="" className='w-96'/></figure>
          <div className="card-body text-justify">
            <h2 className="card-title">Meet Jack!</h2>
            <p>My name is Jack Chin. I'm an artist from Kuala Lumpur, Malaysia. I am currently {currentAge} and have been drawing since 16 years old.
              I have found my way in work of art created with marker pens.
              This website is created by my brother - Vincent that studies Computer Science and loves to create meaningful projects during free time.
            </p>
            <Link href="/Contact">
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Get In Touch</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BioPage