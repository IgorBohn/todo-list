import React from "react";
import "./ListItems.css";
import {FaTrashAlt} from "react-icons/fa";

function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <button
              className="delete"
              onClick={() => {
                props.deleteItem(item.key);
              }}
            >
              {" "}
            <FaTrashAlt/>
            </button>
          </span>
        </p>
      </div>
    );
  });
  return (
    <div>
      <div duration={300} easing="ease-in-out">
        {listItems}
      </div>
    </div>
  );
}

export default ListItems;
