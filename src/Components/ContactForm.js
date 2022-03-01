import { useForm, ValidationError } from '@formspree/react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function ContactForm() {
    const [state, handleSubmit] = useForm("xrgjkerj");
    if (state.succeeded) {
        return <Alert variant="success" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Alert.Heading>Thank you for your message!</Alert.Heading>
            <p>
                I'll tend to it as soon as possible
            </p>
        </Alert>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Your name
            </label>
            <input
                id="name"
                type="neame"
                name="name"
            />
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />
            <label htmlFor="email">
                Email address
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message">
                Your message
            </label>
            <textarea
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <Button type="submit" disabled={state.submitting}>
                Submit
            </Button>
        </form>
    );
}

export default ContactForm
