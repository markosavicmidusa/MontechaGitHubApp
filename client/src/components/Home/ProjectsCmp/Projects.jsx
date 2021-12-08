import React from 'react'
import './projects.css'
import {AiOutlineFundProjectionScreen, AiOutlineIssuesClose} from 'react-icons/ai'
import {GiTechnoHeart} from 'react-icons/gi'
import {MdVisibility, MdOutlineMemory} from 'react-icons/md'


export default function Projects({ dataProjects }) {


    return (

        <div className="projects-bar-container" >
          {/**moze ici u yaseban component */}
            <div className="projects-name">
                <AiOutlineFundProjectionScreen
                className="-project-bar-react-icons"
                style={{color:'blue'}}
                />
                {dataProjects.name}
            </div>

            <div className="projects-1">
                <GiTechnoHeart
                className="-project-bar-react-icons"
                style={{color:'red'}}
                />
                 {dataProjects.language}
            </div>

            <div className="projects-1">
                <MdVisibility
                className="-project-bar-react-icons"
                style={{color:'brown'}}
                />
                {dataProjects.visibility}
            </div>

            <div className="projects-data">
                
                <div className="projects-data1">
                    <AiOutlineIssuesClose
                    className="-project-bar-react-icons"
                    style={{color:'red'}}
                    />
                    {dataProjects.open_issues}
                </div>

                <div className="projects-data1">
                    <MdOutlineMemory
                    className="-project-bar-react-icons"
                    style={{color:'green'}}
                    />
                    {dataProjects.size}
                </div>
               
            </div>

        </div>
    )
}
