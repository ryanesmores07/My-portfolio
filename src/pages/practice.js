import React, { useState, useReducer } from "react"

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newItem = [...state.item, action.payload]
    return {
      ...state,
      item: newItem,
      isModalOpen: true,
      modalContent: "Item added",
    }
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    }
  }
  if (action.type === "REMOVE_ITEM") {
    const newItem = state.item.filter(i => i.id !== action.payload)
    return {
      ...state,
      item: newItem,
      modalContent: "Item removed",
    }
  }
}

const Modal = ({ modalContent, closeModal }) => {
  React.useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 3000)
  }, [])
  return (
    <>
      <h3>{modalContent}</h3>
    </>
  )
}

const defaultState = {
  item: [],
  isModalOpen: false,
  modalContent: "",
}

const Practice = () => {
  const [item, setItem] = useState("")
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = e => {
    e.preventDefault()
    if (item) {
      const newItem = { id: new Date().getTime().toString(), item }
      dispatch({ type: "ADD_ITEM", payload: newItem })
      setItem("")
    }
  }

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" })
  }

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={e => setItem(e.target.value)}
        />
      </form>
      <ul>
        {state.item.map(i => {
          return (
            <>
              <li key={new Date().getTime().toString()}>{i.item}</li>
              <button
                onClick={() => dispatch({ type: "REMOVE_ITEM", payload: i.id })}
              >
                REMOVE
              </button>
            </>
          )
        })}
      </ul>
    </>
  )
}

export default Practice
