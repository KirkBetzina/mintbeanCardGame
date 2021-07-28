import React from 'react'

const AboutUs = () => {
    return(
        <div className='aboutus'>
            <div className='nav'>
                <btn>Home</btn>
                <btn>Login</btn>
                <btn>Main</btn>
            </div>
            <h1>About Our Team!</h1>
                <div className='tony'>
                    <img src='https://media-exp1.licdn.com/dms/image/C4E03AQHdn0UtVIY5YQ/profile-displayphoto-shrink_800_800/0/1617828050557?e=1632960000&v=beta&t=4pxSrvOWo_ic5iMs_E7lWPSeSI6lgySdSa6jjmK6sDI'/>
                    <a href='https://www.linkedin.com/in/tony-shifflett-4bb60220a/'>Tony's linkedin</a>
                    <p>I’m a full stack developer with multi-industry client-facing experience in dynamic environments. I bring focus, flexibility, and a passion for learning to my projects, and am fully comfortable in challenging and time-sensitive workspaces.</p>
                </div>
                <div className='monica'>
                    <img src='https://media-exp1.licdn.com/dms/image/D4D35AQF1bgtmcCHdMw/profile-framedphoto-shrink_200_200/0/1622062827502?e=1627592400&v=beta&t=ZFlRpBWPjT4Uk4nvpYYr81U6yUdyXsgLOInQrt322_M'/>
                    <a href='https://www.linkedin.com/in/monica-mclaughlan-413b8a106/'>Monica's linkedin</a>
                    <p>Analytical and imaginative fullstack developer with experience as a leader and team builder. Quick thinking, collaboration and thorough research lead to thoughtful solutions for a beautiful, innovative product.</p>
                    <p>Feel free to reach out directly at: monica.mclaughlan@gmail.com
                    Check out some of my projects at: https://monicamclaughlan.com
                    Also check out my source code on GitHub: https://github.com/monicamclaughlan?tab=repositories</p>
                </div>
                <div className='kirk'>
                    <img src='https://media-exp1.licdn.com/dms/image/C4E03AQEUr3Ec1vsC9A/profile-displayphoto-shrink_200_200/0/1622065509445?e=1632960000&v=beta&t=vI7Q8di4XxFqpw83pu9CmIkkXA-uLLBL95xDD0Op2e4'/>
                    <a href='https://www.linkedin.com/in/kirk-betzina-332a3761/'>Kirk's linkedin</a>
                    <p>I am a Marine Corps Veteran, who served from 2005-2010. I deployed to Iraq in 2007 focusing on convoy operations in the Al Anbar Province. After the Marine Corps, I attended General Assembly SEI, the Los Angeles Film School and the University of Vermont and have worked in sales for several small companies. I'm excited to be changing careers into Full Stack Software Development.</p>
                </div>
        </div>
    )
}
export default AboutUs