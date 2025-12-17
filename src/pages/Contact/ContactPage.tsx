// ============================================
// Contact Page
// Best Practice: Form handling with validation
// ============================================

import { useState } from 'react';
import { Button, Card, Input } from '../../components/ui';
import { useForm } from '../../hooks';
import { contactApi } from '../../services/api';
import { isValidEmail } from '../../utils/helpers';
import type { ContactFormData } from '../../types';
import './ContactPage.css';

/**
 * Contact page with form
 */
export function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Using custom useForm hook
  const { values, errors, isSubmitting, handleChange, handleSubmit, reset } =
    useForm<ContactFormData>({
      initialValues: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      validate: (values) => {
        const errors: Partial<Record<keyof ContactFormData, string>> = {};

        if (!values.name.trim()) {
          errors.name = 'Name is required';
        }

        if (!values.email.trim()) {
          errors.email = 'Email is required';
        } else if (!isValidEmail(values.email)) {
          errors.email = 'Please enter a valid email';
        }

        if (!values.subject.trim()) {
          errors.subject = 'Subject is required';
        }

        if (!values.message.trim()) {
          errors.message = 'Message is required';
        } else if (values.message.length < 10) {
          errors.message = 'Message must be at least 10 characters';
        }

        return errors;
      },
      onSubmit: async (formData) => {
        try {
          const response = await contactApi.submit(formData);
          if (response.success) {
            setSubmitStatus('success');
            setStatusMessage(response.message || 'Message sent successfully!');
            reset();
          } else {
            throw new Error(response.error);
          }
        } catch {
          setSubmitStatus('error');
          setStatusMessage('Failed to send message. Please try again.');
        }
      },
    });

  return (
    <div className="contact">
      {/* Header */}
      <section className="contact__header">
        <h1 className="contact__title">Get in Touch</h1>
        <p className="contact__subtitle">
          Have a question or want to work together? Send us a message!
        </p>
      </section>

      <div className="contact__content">
        {/* Contact Form */}
        <Card variant="elevated" className="contact__form-card">
          <Card.Body>
            <form onSubmit={handleSubmit} className="contact__form">
              <Input
                label="Your Name"
                name="name"
                placeholder="John Doe"
                value={values.name}
                onChange={handleChange}
                error={errors.name}
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />

              <Input
                label="Subject"
                name="subject"
                placeholder="What's this about?"
                value={values.subject}
                onChange={handleChange}
                error={errors.subject}
              />

              <div className="contact__textarea-group">
                <label htmlFor="message" className="contact__label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  className={`contact__textarea ${errors.message ? 'contact__textarea--error' : ''}`}
                />
                {errors.message && (
                  <span className="contact__error">{errors.message}</span>
                )}
              </div>

              {submitStatus !== 'idle' && (
                <div
                  className={`contact__status contact__status--${submitStatus}`}
                  role="alert"
                >
                  {submitStatus === 'success' ? '✓' : '✕'} {statusMessage}
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                className="contact__submit"
              >
                Send Message
              </Button>
            </form>
          </Card.Body>
        </Card>

        {/* Contact Info */}
        <div className="contact__info">
          <Card variant="outlined">
            <Card.Body>
              <h3 className="contact__info-title">📧 Email</h3>
              <p className="contact__info-text">hello@reactdemo.com</p>
            </Card.Body>
          </Card>

          <Card variant="outlined">
            <Card.Body>
              <h3 className="contact__info-title">📍 Location</h3>
              <p className="contact__info-text">San Francisco, CA</p>
            </Card.Body>
          </Card>

          <Card variant="outlined">
            <Card.Body>
              <h3 className="contact__info-title">⏰ Response Time</h3>
              <p className="contact__info-text">Usually within 24 hours</p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

