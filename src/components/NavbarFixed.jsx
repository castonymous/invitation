import React from 'react'

const items = [
  {id:'home',label:'Home'},
  {id:'couple',label:'Mempelai'},
  {id:'event',label:'Acara'},
  {id:'gallery',label:'Galeri'},
  {id:'gift',label:'Hadiah'},
  {id:'rsvp',label:'RSVP'},
]

export default function NavbarFixed(){
  function scrollTo(id){
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
  }

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-rose-600/90 px-4 py-3 rounded-full shadow-lg flex gap-6">
        {items.map(it=> (
          <button key={it.id} onClick={()=>scrollTo(it.id)} className="text-white text-sm">
            {it.label}
          </button>
        ))}
      </div>
    </nav>
  )
}