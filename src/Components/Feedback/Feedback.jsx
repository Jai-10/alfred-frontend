import './Feedback.css'

const Feedback = () => {
    return (
        <div className='feedback-container'>
            <p>We're constantly working on our services and our application.</p>
            <p>We would love to get some feedback!</p>

            <form>
                <input type="number" placeholder='How would you rate the platform? (0-10)' min='0' max='10' /> <br />
                <input type="text" placeholder='What more services would like?' /> <br />
                <input type="text" placeholder='Are the handymen professional?' /> <br />
                <input type="text" placeholder='What more features would you like to see?' /> <br />
                
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Feedback;