import React from "react";
import s from "./DropArea.module.css";

const DropArea = ({
  onDropHandler,
  dragStartHandler,
  dragLeaveHandler,
  drag,
}) => {
  return (
    <>
      {drag ? (
        <div
          className={s.dropArea}
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          onDrop={(e) => onDropHandler(e)}
        >
          Відпустіть файл
        </div>
      ) : (
        <div
          className={s.emptyDropArea}
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
        >
          Перетягніть файл сюди
        </div>
      )}
    </>
  );
};

export default DropArea;
