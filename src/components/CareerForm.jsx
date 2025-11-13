import React, { useState } from 'react'
import { db } from '../firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { motion } from 'framer-motion'

export default function CareerForm(){
  const [form, setForm] = useState({ name: '', email: '', resume: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  function handleChange(e){
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e){
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })
    try {
      const docRef = await addDoc(collection(db, 'applicants'), {
        name: form.name,
        email: form.email,
        resume: form.resume,
        message: form.message,
        createdAt: serverTimestamp()
      })
      setStatus({ loading: false, success: 'Application submitted! Thank you.', error: null })
      setForm({ name: '', email: '', resume: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus({ loading: false, success: null, error: 'Failed to submit. Try again later.' })
    }
  }

  return (
    <motion.form onSubmit={handleSubmit} className="card form-card" initial={{ scale: 0.98 }} animate={{ scale: 1 }} transition={{ duration: 0.4 }}>
      <h3 className="form-title">Apply Now</h3>
      <div className="grid">
        <label>
          <span>Name</span>
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          <span>Resume Link</span>
          <input name="resume" value={form.resume} onChange={handleChange} placeholder="e.g. https://drive.google.com/..." />
        </label>
        <label className="full">
          <span>Message</span>
          <textarea name="message" value={form.message} onChange={handleChange} rows={5} />
        </label>
      </div>

      <div className="actions">
        <button type="submit" className="btn" disabled={status.loading}>{status.loading ? 'Submitting...' : 'Submit Application'}</button>
      </div>

      {status.success && <p className="success">{status.success}</p>}
      {status.error && <p className="error">{status.error}</p>}
    </motion.form>
  )
}
