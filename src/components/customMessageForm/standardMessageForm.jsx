/* eslint-disable no-undef */
import { PaperAirplaneIcon, PaperClipIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React, {useState} from 'react'
import Dropzone from 'react-dropzone'

const StandardMessageForm = ({props,activeChat}) => {

  const [message, setMessage] = useState("")
  const [attachment, setAttachment] = useState("")
  const [preview, setPreviev] = useState("")

  const handleChange = (e)=>setMessage(e.target.value)

  const handleSubmit = async () => {
    const date = new Date()
    .toISOString()
    .replace("T", " ")
    .replace("Z", `${Math.floor(Math.random()*1000)}+00:00`) 
  }

  return (
    <div className="message-form-container">
      {preview && (
        <div className="message-form-preview">
          <img src={preview} alt="preview" onLoad={() => URL.revokeObjectURL(preview)} className="message-form-preview-image" />
          <XMarkIcon
            className='message-form-icon-x'
            onClick={() => {
              setPreviev("")
              setAttachment("")
            }}
          />
        </div>
      )}
      <div className="message-form">
        <div className="message-form-input-container">
          <input
          className='message-form-input'
          type='text'
          value={message}
          onChange={handleChange}
          placeholder='Send a message ...'
          />
        </div>
        <div className="message-form-icons">
          <Dropzone
          acceptedFiles=".jpg,.jpeg,.png"
          multiple={false}
          noClick={true}
          onDrop={(acceptedFiles)=>{
            setAttachment(acceptedFiles[0])
            setPreviev(URL.createObjectURL(acceptedFiles))
          }}
          >
            {({getRootProps,getInputProps,open})=>(
            <div{...getRootProps()}>
               <input {...getInputProps()} /> 
               <PaperClipIcon
               className='message-form-icon-clip'
               onClick={open}
               />
            </div>
            )}
          </Dropzone>
          <hr className='vertical-line'/>
          <PaperAirplaneIcon
          className='message0form-icon-airplane'
          onClick={()=>{
            setPreview("")
            // handleSubmit()
          }}/>
        </div>
      </div>
    </div>
  )
}

export default StandardMessageForm