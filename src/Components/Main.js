import React from 'react';

import Login from './Login';
import Test1 from '../Images/Test1.jpg';
import Test2 from '../Images/Test2.jpg';
import Test3 from '../Images/Test3.jpg';

export default function Main() {
    return (
        <main>
            <section className='profile-section'>
                <article>
                    <h2>Why Us?</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
                    Please you can send your feedback to <a href='/#'>info@email.com</a>  
                    </p>
                </article>
                <article>
                    <Login />
                </article>
            </section>
            <h2>Testimonies from students...</h2>
            <section className='testimonies'>
                <article>
                    <figure>
                        <img
                            src={Test1}
                            alt='Testimonies'
                            className='studentImg'
                        />
                        <figcaption>
                            Sed ut perspiciatis unde omnis iste natus error sit 
                            voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore 
                            veritatis et quasi architecto beatae vitae dicta sunt 
                            explicabo.<br/>
                            By John Doe
                        </figcaption>
                    </figure>
                </article>
                <article>
                <figure>
                        <img 
                            className='studentImg'
                            src={Test2}
                            alt='Testimonies'
                        />
                        <figcaption>
                        Sed ut perspiciatis unde omnis iste natus error sit 
                            voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore 
                            veritatis et quasi architecto beatae vitae dicta sunt 
                            explicabo.<br/>
                            By Diana Tahada
                        </figcaption>
                    </figure>
                </article>
                <article>
                <figure>
                        <img 
                            className='studentImg'
                            src={Test3}
                            alt='Testimonies'
                        />
                        <figcaption>
                        Sed ut perspiciatis unde omnis iste natus error sit 
                            voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore 
                            veritatis et quasi architecto beatae vitae dicta sunt 
                            explicabo.<br/>
                            By Monet Tahada
                        </figcaption>
                    </figure>
                </article>
            </section>
        </main>
    );
}