import React, { Component } from 'react'
import loading from './media/loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <img className='my-3' src={loading} width="70px" alt='spinner'/>
      </div>
    )
  }
}
