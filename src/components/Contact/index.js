import './index.scss'

const Contact = () => {
  return (
    <div className="container contact-page">
      <div className="section">
        <form
          data-netlify="true"
          name="pizzaOrder"
          onSubmit={handleSubmit}
          netlify={true}
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
const handleSubmit = (event) => {
  event.preventDefault()

  const myForm = event.target
  const formData = new FormData(myForm)

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => alert('/thank-you/'))
    .catch((error) => alert(error))
}
export default Contact
