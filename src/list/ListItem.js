import React from "react"
import Label from "./Label";

function ListItem(){
    return (
          <div className='list-item'>
            <div className='list-title'>
              <h4>Title one</h4>
            </div>
            <div className='list-descr'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div className='list-label'>
              <Label />
              <Label />
              <Label />
            </div>
          </div>
    )
}

export default ListItem;