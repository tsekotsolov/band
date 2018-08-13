import React from 'react'

let About = () => {
  return (
    <section className='about'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6 about-image flex-align'>
            <h2>About</h2>
          </div>
          <div className='col-lg-6 flex-align'>
            <div className='wrapper-about-p '>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis consequatur pariatur rem quam itaque
            dolorem quaerat, aut ipsum velit.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo non nostrum dolorum harum eligendi magni debitis
            tempore maiores numquam enim, ipsum minima quibusdam. Pariatur dolorem provident consequuntur illum velit
            voluptatum, maiores reprehenderit quam ipsum tenetur et corrupti doloremque. Voluptate, pariatur!
              </p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum id repellendus eos, odio commodi molestias
            suscipit adipisci culpa non alias.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container absolute'>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='card border-0 bg-dark'>
              <img className='card-img-top' src='https://res.cloudinary.com/tsekotsolov/image/upload/v1531585864/band/singer.jpg' alt='singer' />
              <div className='card-body text-center '>
                <h5 className='card-title '>Johny Singer</h5>
                <p className='card-text'>Lead Singer</p>
              </div>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='card border-0 bg-dark'>
              <img className='card-img-top' src='https://res.cloudinary.com/tsekotsolov/image/upload/v1531585863/band/guitar.jpg' alt='guitar' />
              <div className='card-body text-center '>
                <h5 className='card-title '>Ricky Guitar</h5>
                <p className='card-text'>Solo Guitar</p>
              </div>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='card border-0 bg-dark'>
              <img className='card-img-top' src='https://res.cloudinary.com/tsekotsolov/image/upload/v1531585863/band/drummer.jpg' alt='drummer' />
              <div className='card-body text-center '>
                <h5 className='card-title '>Sammy Drums</h5>
                <p className='card-text'>Drum &amp; base</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About
