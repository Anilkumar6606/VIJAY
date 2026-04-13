'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields')
      return
    }

    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email')
      }

      setSuccess(true)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => {
        setSubmitted(false)
        setSuccess(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7730890887',
      link: 'tel:+917730890887'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'agathamudivijay2002@gmail.com',
      link: 'mailto:agathamudivijay2002@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Hyderabad, Telangana, India',
      link: '#'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/agathamudi-vijay-kumar',
      link: 'https://linkedin.com/in/agathamudi-vijay-kumar-22a264297'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background via-background to-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-muted-foreground">
              I&apos;m always interested in hearing about new opportunities, collaborations, and exciting projects. Feel free to reach out!
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all hover:border-primary/50 hover-lift group animate-fade-in-up hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-lg hover-lift animate-fade-in-up animate-delay-400 hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-bold text-foreground mb-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all hover:border-primary/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all hover:border-primary/50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all hover:border-primary/50"
                  placeholder="What is this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all hover:border-primary/50"
                  placeholder="Your message..."
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg animate-fade-in-up">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-500 text-sm">{error}</p>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg animate-fade-in-up">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-500 text-sm font-semibold">Message Sent Successfully! 🎉</p>
                    <p className="text-green-500/80 text-xs mt-1">A confirmation email has been sent to your inbox. I'll get back to you soon!</p>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading || submitted}
                size="lg"
                className="w-full md:w-auto bg-primary hover:bg-primary/90 shadow-lg hover-lift disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {submitted && success ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Message Sent!</span>
                  </>
                ) : loading ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-xl p-8 md:p-12 text-center hover-lift animate-fade-in-up animate-delay-500 group">
            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              Open to Opportunities
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you&apos;re looking for a sales & marketing leader, digital marketing specialist, or just want to discuss business ideas, I&apos;d love to hear from you!
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
