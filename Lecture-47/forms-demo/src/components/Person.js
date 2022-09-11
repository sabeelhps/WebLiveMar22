import React from 'react'

const Person = (props) => {
  return (
      <article>
          <h1>Name : {props.name} </h1>
          {props.children}
    </article>
  )
}

export default Person;