import Header from "./components/Header"
import FeedBackList from "./components/FeedBackList"
import {useState} from 'react'
import FeedBackData from './data/FeedBackData'

function App(){
    const [feedback, setFeedback]= useState(FeedBackData)

    const deleteFeedBack = (id) => {
        console.log('deleting id', id)
        setFeedback(feedback.filter((item)=> 
        item.id !== id
        ))
    }

    return (
        <>
        <Header/>
        <FeedBackList 
            feedback={feedback}
            handleDelete={deleteFeedBack}
        />
        </>
    )
}

export default App