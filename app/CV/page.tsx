import React from 'react'

const CVPage = () => {
  return (
    <div className='w-5/6 mx-auto'>
      <div>
        <h1 className='text-xl text-center p-5'>CV</h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">1998</time>
              <div className="text-lg font-black">Born to Creativity</div>
              Jack Chin was born in 1998, and from a young age, creativity flowed through his veins. His artistic journey began as a child, experimenting with colors and shapes that hinted at the artist he would become.
            </div>
            <hr/>
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2014</time>
              <div className="text-lg font-black">Discovering a Passion</div>
              In 2014, at the age of 16, Jack discovered his passion for drawing, particularly in architecture and nature. With a set of sharpie pens in hand, he started creating intricate and captivating artworks that showcased his unique artistic voice.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2023</time>
              <div className="text-lg font-black">A Journey of Success</div>
              Fast forward to 2023, and Jack's journey in the art world has been nothing short of impressive. His mastery of sharpie pens has garnered attention, creating a distinctive style that captivates viewers. Jack continues to thrive, leaving an indelible mark on the art scene.
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CVPage