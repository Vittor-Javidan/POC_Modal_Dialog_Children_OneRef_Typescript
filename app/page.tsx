"use client"

import React, { Suspense, useState } from 'react'
import Modal from '@/components/Modal'

export default function Home(): JSX.Element {

  const [amount, setAmount] = useState<string>("10")
  const [showModal, setShowModal] = useState<boolean>(false)

  function openModal(): void { setShowModal(true) }
  function closeModal(): void { setShowModal(false) }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) { 
    setAmount(e.target.value) 
  }
  
  return (
    <div className="App">
      <div className='input'>
        <label
          htmlFor='input'
        >
          <span>Inputs Amount</span>
          <input 
            id='input'
            placeholder='Amount of buttons'
            value={amount}
            onChange={onChange}
          />
        </label>
      </div>
      
      <ButtonsArray
        amount={Number(amount) ? Number(amount) : 0}
        onClick={openModal}
      />
      

      {showModal && (
        <Suspense>
          <Modal
            onPressEsc={closeModal}
          >
            <button
              onClick={closeModal}
            >
              fechar modal
            </button>
          </Modal>
        </Suspense>
      )}
    </div>
  );
}

function ButtonsArray(props: {
  amount: number, 
  onClick: React.MouseEventHandler<HTMLButtonElement>}
): JSX.Element {

  const buttonsArray: JSX.Element[] = []

  for(let i = 0; i < props.amount; i++) {
    buttonsArray.push(
      <button 
        key={i}
        onClick={props.onClick}
      >
        open modal
      </button>
    )
  }

  return (<div>{buttonsArray}</div>)
}