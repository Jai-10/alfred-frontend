import './Services.css'

const Services = () => {
    return (
        <div className='services-container'>
            <label htmlFor="services">Choose a service: &nbsp;</label>
            <select name="services" id="services" className='services-list'>
                <option className='services-list-item' value="none" disabled selected>Select an option</option>
                <option className='services-list-item' value="plumbing">Plumbing</option>
                <option className='services-list-item' value="electrician">Electrician</option>
                <option className='services-list-item' value="mechanic">Mechanic</option>
                <option className='services-list-item' value="painting">Painting</option>
            </select>

            
        </div>
    )
}
export default Services;