import React, { useState } from 'react'

const AddNewMovie = () => {
    const [title,setTitle]=useState('')
    const [openingText,setOpeningText]=useState('')
    const [releaseDate,setReleaseDate]=useState('')

    const titleChangeHandler=(event)=>{
       setTitle(event.target.value)
       console.log(event.target.value)
    }
    const openingTextChangehandler=(event)=>{
        setOpeningText(event.target.value)
        console.log(event.target.value)
    }
    const dateChangeHandler=(event)=>{
        setReleaseDate(event.target.value)
        console.log(event.target.value)
    }
    const submitFormhandler=(event)=>{
        event.preventDefault();
        const newObj={
            title,
            openingText,
            releaseDate
        } 
        console.log(newObj)

        setTitle('')
        setOpeningText('')
        setReleaseDate('')
    }
  return (
    <form onSubmit={submitFormhandler}>
        <label htmlFor="title">Title:</label><br/>
        <input type="text" id='title' onChange={titleChangeHandler} value={title} /><br/>
        <label htmlFor="openingText">Opening Text:</label><br/>
        <input type="text" id='openingText' onChange={openingTextChangehandler} value={openingText} /><br/>
        <label htmlFor="date">Release Date:</label><br/>
        <input type="date" id='date' onChange={dateChangeHandler} value={releaseDate} /><br/>
        <button>Add Movie</button>

    </form>
  )
}

export default AddNewMovie
