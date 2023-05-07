import React, { useRef, useEffect, ReactNode} from "react"

export default function Modal({ 
  onPressEsc, 
  children
}:{
  onPressEsc: () => void
  children : ReactNode
}): JSX.Element {

  const modalRef = useRef<HTMLDialogElement | null>(null)

  function closeModal() {
    onPressEsc()
    modalRef.current?.close()
  }

  useEffect(() => {
    const { current } = modalRef
    current?.close()
    current?.showModal()
    return () => {
      current?.close()
    }
  })
  
  return (
    <dialog
      ref={modalRef}
      onCancel={closeModal}
    >
      {children}
    </dialog>
  )
}