import React from 'react'
import './DeleteButton.css'
function DeleteButton(props) {
  return (
    <div>
    <button class="btn btn-delete">
  <span class="mdi mdi-delete mdi-24px"></span>
  <span class="mdi mdi-delete-empty mdi-24px"></span>
  <span>Delete</span>
</button>
    </div>
  )
}

export default DeleteButton