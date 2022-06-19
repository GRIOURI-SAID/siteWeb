import React from 'react'
import { useForm } from 'react-hook-form'


import style from "./message.module.scss"

const Message = () => {
  const {register, handleSubmit} = useForm()
  
  const onSubmit = (e,data) => {
  
    e.preventDefault()
     console.log(data)
  }
  return (
    <div className={style.message}>
      <h2 className='text-center'>Schrijf je in voor de nieuwsbrief en <br/>
        ben altijd op de hoogte! </h2>
        
      <form >
        <div className='container'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-row">
              <div class="form-group col-md-5">
                <label for="inputEmail4">Name</label>
                <input type="text" class="form-control" id="name" name="name" 
                  {...register('name')}
                   placeholder="Name ...." />
              </div>
              <div class="form-group col-md-5">
                <label for="inputPassword4">Email</label>
                <input type="email" class="form-control"  name='email' placeholder="Email ..." />
              </div>

              <div class="form-group col-md-2 mt-4">
                <button type="submit" class={style.btn}>Inschrijven</button>

               
              </div>
            </div>
           
        
         
          </form>
        </div>
        
      </form>
    
    </div>
  )
}

export default Message