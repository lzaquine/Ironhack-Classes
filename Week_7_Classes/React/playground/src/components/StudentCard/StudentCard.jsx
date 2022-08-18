import React from 'react'

let person = {
    myImg: 'https://imagens3.ne10.uol.com.br/blogsne10/coisasdepet/uploads//2018/12/wilfred.jpg',
    name: 'Lucas',
    surname: 'Zaquine',
    cohort: 'WDFTLIS0722',
    city: 'Lisbon',
    github: 'https://www.github.com/lzaquine'
};

function StudentCard(props) {
    const {firstName, cohort, city} = props;
    console.log(props)
    return (
        <div>
        <h6>{props.firstName}</h6>
        <h6>{props.cohort}</h6>
        <h6>{props.city}</h6>
    </div>
    );
}

export default StudentCard;
/* <div className="card">
    <img src={person.myImg} alt="Ugly cat" />
    <h1>{person.name} {person.surname}</h1>
    <h2>{person.cohort}</h2>
    <h2>{person.city}</h2>
    <a href={person.github}>Github</a>
</div> */

// npm i react-player 
// npm run start
// import ReactPlayer from 'react-player';
// ReactPlayer is a component that allows you to play videos
// ReactPlayer='url' playing controls volume={0.5} />   is the syntax to play a video

// react calender