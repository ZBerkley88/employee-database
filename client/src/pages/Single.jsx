import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu"

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/17082890/pexels-photo-17082890/free-photo-of-eye-of-the-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />

        <div className="user">
          <img
            src="https://images.pexels.com/photos/8206766/pexels-photo-8206766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <div className="info">
            <span>Zack</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <button className="editBtn">Edit</button>
            </Link>
            <Link>
              <button className="deleteBtn">Delete</button>
            </Link>
          </div>
        </div>

        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
          magnam?
        </h1>
        <p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sit
            deleniti cum quod odit quis fugit, nam recusandae error odio
            temporibus, expedita ex! Quia rerum, distinctio natus quidem
            doloremque quod.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            nostrum harum quo! Quidem facilis, fuga eius officia nemo mollitia
            vero voluptatem similique quae voluptates dolorum dicta perferendis
            qui nisi natus!
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
