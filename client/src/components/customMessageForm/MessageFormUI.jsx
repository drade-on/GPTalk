import { PaperAirplaneIcon, PaperClipIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React, {useState} from 'react'
import Dropzone from 'react-dropzone'


const MessageFormUI = ({
    setAttachment,
    message,
    handleChange,
    handleSubmit,
}) => {
    
const [preview,setPreviev] = useState("")

return (
    <div className="message-form-container">
    {preview && (
      <div className="message-form-preview">
        <img src={preview} 
        alt="preview"
        onLoad={() => URL.revokeObjectURL(preview)}
        className="message-form-preview-image"
        />
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
        className='message-form-icon-airplane'
        onClick={()=>{
          setPreviev("")
          handleSubmit()
        }}/>
      </div>
    </div>
  </div>
  )
}

export default MessageFormUI