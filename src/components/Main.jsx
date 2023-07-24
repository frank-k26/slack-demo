import logo from '../images/slack.svg'
import '../styles/main.css'

function Main(){
    return(
        <div className='main'>
            <div className='main-logo'>
                <img src= {logo} alt="slack logo" width= '80px' />
                <p>slack</p>
            </div>
            <div className='main-text'>
                <h2>Slack bring the team together wherever you are</h2>
            </div>
            <div className='sub-text'>
                <p className='button'>Sign in to Slack</p>
                <p className='info'>We'll take you to your web browser to sign in and then bring you back here</p>
            </div>
        </div>
    )
}

export default Main