import React from 'react'
import Link from 'next/link'

export const Container = ({children}) => {
  return (
    <>
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid justify-content-center">
                <Link className="navbar-brank mx-4" href="/"  style={{"color":"white"}}>Acceuil</Link>
                <Link className="navbar-brank mx-4" href="/blog"  style={{"color":"white"}}>Blog</Link>
                <Link className="navbar-brank mx-4" href="/utilisateur"  style={{"color":"white"}}>Liste</Link>
            </div>
        </nav>
        {children}
    </>
  )
}
