import {useState} from 'react'
import Rating from './Rating'
import Button from './utils/Button'
import Card from './utils/Card'

function FeedbackForm() {
    const [text, setText]= useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [msg, setMsg] = useState('')
    const [rating, setRating] = useState(0)

    const handleText = (e) => {
        console.log('FeedbackForm setText: ', e.target.value)
        //add prev state to fix form issue when deleting text
        setText(e.target.value)
            
        

        if (text==='') {
           setBtnDisabled(true)
           setMsg(null) 
        }else if (text!== '' && text.trim().length <= 10) {
            setMsg('Text must be at least 10 characters')
            setBtnDisabled(true)
        }else {
            setMsg(null)
            setBtnDisabled(false)
        }
        
    }
  return (
    <Card>
        <form>
            <h2>How would you rate it?</h2>
            <Rating select={(rating)=>{setRating(rating)}}/>
            <div className='input-group'>
                <input 
                onChange={handleText} 
                type='text' 
                placeholder='Write a review'
                value={text}
                />
                <Button 
                    type='submit'
                    isDisabled= {btnDisabled}
                    >
                Send
                </Button>
            </div>

            {msg && <div className='message'>{msg}</div>}
        </form>
    </Card>    
  )
}

export default FeedbackForm