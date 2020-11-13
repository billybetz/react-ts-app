import React from 'react'

import './App.css'

import { Profile } from './modules/Profile'
import { Sommaire } from './modules/Sommaire'
import { MainVue } from './modules/MainVue'
import { Contact } from './modules/Contact'
import { Controller } from './modules/Controller'

function App () {
  return (
    <div className='container-fluid App'>
      <div className='row'>
        <div className='col-4'>
          {Profile({ name: 'Billy', lastName: 'Betz', age: 24 })}
        </div>
        <div className='col-8'>
          {Sommaire({ skills: ['FullstackJs'] })}
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          {MainVue({})}
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          {Contact({})}
        </div>
        <div className='col'>
          {Controller({})}
        </div>
      </div>
    </div>
  )
}

export default App
