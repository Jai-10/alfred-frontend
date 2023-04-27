import './Services.css'

const Services = () => {
    return (
        <div className='services-container'>
            <div>
                <label htmlFor="services">Choose a service: &nbsp;</label>
                <select name="services" id="services" className='services-list'>
                    <option className='services-list-item' value="none" disabled selected>Select an option</option>
                    <option className='services-list-item' value="plumbing">Plumbing</option>
                    <option className='services-list-item' value="electrician">Electrician</option>
                    <option className='services-list-item' value="mechanic">Mechanic</option>
                    <option className='services-list-item' value="painting">Painting</option>
                </select>
            </div>

            <br />

            <div>
                <label htmlFor="available-location">Choose your location: &nbsp;</label>
                <select name="available-location" id="available-location" className='location-list'>
                    <option className='services-list-item' value="none" disabled selected>Select an option</option>
                    <option className='services-list-item' value="mumbai">Mumbai</option>
                    <option className='services-list-item' value="pune">Pune</option>
                    <option className='services-list-item' value="ahemdabad">Ahemdabad</option>
                    <option className='services-list-item' value="delhi">Delhi</option>
                    <option className='services-list-item' value="gurugram">Gurugram</option>
                    <option className='services-list-item' value="bangalore">Bangalore</option>
                    <option className='services-list-item' value="hyderabad">Hyderabad</option>
                    <option className='services-list-item' value="chennai">Chennai</option>
                </select>
            </div>

            <br />

            <div>
                <label htmlFor="time-slot">Choose a suitable time: &nbsp;</label>
                <select name="time-slot" id="time-slot" className='time-slot-list'>
                    <option className='services-list-item' value="none" disabled selected>Select an option</option>
                    <option className='services-list-item' value="9">9:00am</option>
                    <option className='services-list-item' value="10">10:00am</option>
                    <option className='services-list-item' value="11">11:00am</option>
                    <option className='services-list-item' value="12">12:00pm</option>
                    <option className='services-list-item' value="1">1:00pm</option>
                    <option className='services-list-item' value="2">2:00pm</option>
                    <option className='services-list-item' value="3">3:00pm</option>
                    <option className='services-list-item' value="4">4:00pm</option>
                    <option className='services-list-item' value="5">5:00pm</option>
                </select>
            </div>

            <br />

            <button className='submit-request'>Send request</button>
        </div>
    )
}
export default Services;