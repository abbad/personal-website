import React from "react"

const Biography = () =>(
  <div>
    <h1> 
      Projects
    </h1>
    <ol>
      <li>
        An Open Source TCP/UDP-Based Network Probing Tool for Real Time Packet Loss Estimation
        <p>
          Publication date Jul 29, 2015  publication description MIPRO 2015/CT publication description Paper demonstrates the design, implementation and the evaluation of a new open source tool for estimating end-to-end packet loss between a source and a destination node over the lossy Internet. Different from the most of the proposed tools in the literature that uses either TCP or UDP, and may require long time to accurately predict the packet loss rate, the proposed tool utilizes both features of the TCP and UDP, thus making it able for accurately predicting the packet loss of a communication link within a short probing time, which makes it appropriate for real-time multimedia applications. Our performance evaluation shows the effectiveness of the proposed tool even in relatively short probing time. 
        </p>
      </li>
      <li>
        System Monitor version 
        <p>
          A program that gives you general information about your computer written in c    programming language. 
        </p>
      </li>
      <li>
        Transit Bot:
        <p>
          This is a prototype for accessing Slack and also MTA packages. There is no Lambda and Lex integration in this one. I have used Node since I wanted  to learn a new language. From this prototype, I will just take the MTA API calls and add them to Lambda. 
        </p> 
      </li>
      <li>
        Python Code Snippets    
        <p>
          In this repository there are a couple of interesting problems that I wanted to solve. 
        </p>
      </li>
      <li>
        Events Finder:
        <p>
          I did this because I used to live in Berlin and there I wanted to know where all the events are and who is going there, therefore I came with this app which utilizes      Facebook FQL (depricated) to get events around you and also location services Center.       
        </p>
      </li>
    </ol>
  </div>
);

export default Biography;


