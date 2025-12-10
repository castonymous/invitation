import React, { useState } from 'react'

export default function SectionRSVP(){
  const [name,setName] = useState('')
  const [message,setMessage] = useState('')
  const [status,setStatus] = useState('Hadir')

  function submit(e){
    e.preventDefault()
    const data = {name,message,status,ts:Date.now()}
    const existing = JSON.parse(localStorage.getItem('rsvps')||'[]')
    existing.unshift(data)
    localStorage.setItem('rsvps', JSON.stringify(existing))
    alert('Terima kasih!')
    setName(''); setMessage(''); setStatus('Hadir')
  }

  return (
    <div className="container mx-auto px-6">
      <h3 className="text-2xl text-center mb-6">Konfirmasi Kehadiran</h3>
      <form onSubmit={submit} className="max-w-xl mx-auto bg-rose-50 p-6 rounded-2xl">
        <label className="block mb-2">Nama</label>
        <input className="w-full p-3 rounded-md" value={name} onChange={e=>setName(e.target.value)} required />

        <label className="block mt-4 mb-2">Pesan</label>
        <textarea className="w-full p-3 rounded-md" value={message} onChange={e=>setMessage(e.target.value)} />

        <div className="mt-4">
          <label className="mr-3"><input type="radio" checked={status==='Hadir'} onChange={()=>setStatus('Hadir')} /> Hadir</label>
          <label className="mr-3"><input type="radio" checked={status==='Tidak'} onChange={()=>setStatus('Tidak')} /> Tidak Hadir</label>
          <label><input type="radio" checked={status==='Ragu'} onChange={()=>setStatus('Ragu')} /> Ragu-ragu</label>
        </div>

        <div className="mt-6 text-right">
          <button className="bg-rose-600 text-white px-6 py-2 rounded-full">Kirim</button>
        </div>
      </form>
    </div>
  )
}