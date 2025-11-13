import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h4>Zyzen</h4>
          <p>© {new Date().getFullYear()} Zyzen. All rights reserved.</p>
        </div>
        <div className="socials">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
