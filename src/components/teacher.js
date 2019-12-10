import React, { Component } from "react";

class Teacher extends Component {
    
    constructor(){
        super();
        this.state = {
            degree : "Bs",
            subjects : ["English", "Calculus", "Programming", "Physics"]
        };
    }

    teach(){
        console.log("teach");
    }

    renderDegree(){
        return (this.state.degree === "Bs") ? <span>"bachelors degree"</span> : <span> {this.state.degree} </span>
    }

    renderSubjects(){

        if( this.state.subjects.length === 0 ) 
            return <p>There are No Subjects !</p>;
        else 
            return <p>{this.state.subjects.map( subj => <span key={ subj }> {subj} </span> )} </p>;
    }

    render(){
        return(
            <div className="teacher-bio">
                <br />
                <br />
                <p>asghda</p>
                <p>{this.renderDegree()}</p>
                <div> 
                    {/* {this.state.subjects.length === 0 && "Choose Your Subjects First "} */}
                    {this.renderSubjects()} 
                </div>
            </div>
        );
    }

} 

export default Teacher;