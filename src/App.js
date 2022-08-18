import Header from "./components/Header"
import FeedBackList from "./components/FeedBackList"
import {useState} from 'react'
import FeedBackData from './data/FeedBackData'

function App(){
    const [feedback, setFeedback]= useState(FeedBackData)

    return (
        <>
        <Header/>
        <FeedBackList feedback={feedback}/>
        </>
    )
}

export default App