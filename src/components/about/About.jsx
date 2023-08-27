import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import "./about.css"
import { images } from "../../constants/images"
import { aboutStats } from "../../constants/data"
import { FaPlay } from "react-icons/fa"
import video from "../../assets/video/video.mp4"
const About = () => {
  const videoRef = useRef(null)
  const [play, setPlay] = React.useState(false)
  const handlePlay = () => {
    if (play) {
      videoRef.current.pause()
      setPlay(false)
    } else {
      videoRef.current.play()
      setPlay(true)
    }
  }
  useEffect(() => {
    videoRef.current.play()
  }, [])

  return (
    <div className="about section-p">
      <div className="container">
        <div className="about-content">
          <div className="about-grid grid">
            <img src={images.headerBackgroundImage} alt="headerbg"
              className="mx-auto about-img" />
            <div className="section-title">
              <h3 className="text-brown">I'm
                <span className="text-dark"> Elham</span>
              </h3>
              <p className="text mx-auto">
                "Full-Stack Development Student with a Passion for Pair Programming and Real-World Projects | Enrolled at Microverse | Skilled in React Redux, JavaScript, Ruby, and Rails"
              </p>
            </div>
          </div>
          <div className="about-grid grid">
            {
              aboutStats.map((stat, index) => {
                return (
                  <div className="about-item text-center flex" key={index}>
                    <div className="about-item-icon">
                      <img src={stat.images} alt="no image" />
                    </div>
                    <div className="about-item-text text-left">
                      <h3 className="text-dark">{stat.number}</h3>
                      <p className="text">{stat.title}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="about-grid grid">
            <div className="section-title">
              <h3 className="text-brown">Video
                <span className="text-dark">Presentation</span>
              </h3>
              <p className="text mx-auto">
                "Full-Stack Development Student with a Passion
                for Pair Programming and Real-World Projects |
                Enrolled at Microverse | Skilled in React Redux,
                JavaScript, Ruby, and Rails"
              </p>
            </div>
            <div className="about-video">
              <video muted autoPlay loop ref={videoRef}>
                <source src={video} type="video/mp4" />
              </video>
              <button type="button" className="about-video-btn flex flex-center"
                onClick={handlePlay}>
                <FaPlay className="text-brown" size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About