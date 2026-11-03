import { useState } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data) {
  const errors = {};
  if (!data.get('name')?.trim()) errors.name = 'Please enter your name.';
  if (!EMAIL_RE.test(data.get('email')?.trim() ?? '')) errors.email = 'Please enter a valid email address.';
  if ((data.get('message')?.trim().length ?? 0) < 10) errors.message = 'Please share a little more detail (10+ characters).';
  return errors;
}

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) {
      form.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    setStatus('sending');
    try {
      // Netlify Forms endpoint; see the static form in index.html.
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const field = (name, label, props = {}, Tag = 'input') => (
    <div className={`field${errors[name] ? ' has-error' : ''}`}>
      <label htmlFor={`cf-${name}`}>{label}</label>
      <Tag
        id={`cf-${name}`}
        name={name}
        aria-invalid={Boolean(errors[name])}
        aria-describedby={errors[name] ? `cf-${name}-error` : undefined}
        {...props}
      />
      {errors[name] && (
        <p id={`cf-${name}-error`} className="field__error">
          {errors[name]}
        </p>
      )}
    </div>
  );

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <p className="form-success__title">Thank you — message received.</p>
        <p>I’ll get back to you as soon as I can.</p>
        <button type="button" className="btn btn--ghost" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" name="contact" method="POST" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="form-name" value="contact" />
      <p className="visually-hidden">
        <label>
          Leave this field empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="field-row">
        {field('name', 'Name', { type: 'text', autoComplete: 'name', required: true })}
        {field('email', 'Email', { type: 'email', autoComplete: 'email', required: true })}
      </div>
      {field('company', 'Company (optional)', { type: 'text', autoComplete: 'organization' })}
      {field('message', 'Tell me about the problem', { rows: 5, required: true }, 'textarea')}

      <div className="contact-form__footer">
        <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        <p className="form-status" aria-live="polite">
          {status === 'error' && 'Something went wrong sending your message. Please try again, or reach out on LinkedIn.'}
        </p>
      </div>
    </form>
  );
}
