import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading">Feel Free to Contact Us </h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13726.651521291235!2d76.83265522202602!3d30.671620212486133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f94a4eb031845%3A0x1f831917d272f13f!2sIndustrial%20Area%20Phase%201%2C%20Panchkula%2C%20Haryana!5e0!3m2!1sen!2sin!4v1665939876977!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xpznlvoa" method="post" className="contact-inputs">
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            autoComplete="off"
            
          />
          <input
            type="email"
            placeholder="Email"
            name="Email"
            required
            autoComplete="off"
            
          />
          <textarea
            name="Message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter your message"
          />
          <input type="submit" value="Send"/>
        </form>
      </div>
    </div>
  </Wrapper>;
};

export default Contact;
