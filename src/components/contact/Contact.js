import React from 'react'
import './ContactStyle.css'

const Contact = () => {
    return (
        <div name='contact' className='contact'>
            <div className="container">
                <div className="top">
                    <h1>Contact</h1>
                </div>

                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder='Enter your name' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div>
                    <label>Message</label>
                        <input type="text" placeholder='Enter your message' className="largeInput" />
                    </div>
                    <div className="bottom">
                        <button className="btn btn-dark">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;