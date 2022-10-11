import React from "react";
import "./card.scss";

const Card = ({ course }) => {
  let data;

  switch (course) {
    case "1":
      data = {
        title: "Big Data Analytics",
        image:
          "https://plus.unsplash.com/premium_photo-1661443781814-333019eaad2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=951&q=80",
        year: "Year 3 Semester 1",
      };
      break;
    case "2":
      data = {
        title: "Artificai Intelligence",
        image:
          "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        year: "Year 3 Semester 1",
      };
      break;
    case "3":
      data = {
        title: "Integrative Programming",
        image:
          "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        year: "Year 3 Semester 1",
      };
      break;
    case "4":
      data = {
        title: "Advanced Web Applications",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        year: "Year 3 Semester 1",
      };
      break;
    case "5":
      data = {
        title: "Project Management",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80",
        year: "Year 3 Semester 1",
      };
      break;
    case "6":
      data = {
        title: "Software Engineering Concepts",
        image:
          "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80",
        year: "Year 3 Semester 1",
      };
      break;
    default:
      break;
  }
  return (
    <div className="card">
      <div className="image">
        <img src={data.image} alt="" className="courseImage" />
      </div>
      <div className="bottom">
        <span className="title">{data.title}</span>
        <span className="year">{data.year}</span>
      </div>
    </div>
  );
};

export default Card;
