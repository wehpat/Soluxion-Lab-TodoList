import { toggleEdit } from "../redux/mode/editMode.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Footer() {
  const dispatch = useDispatch();
  const { edit: editMode } = useSelector((state) => state.edit);

  const handleSave = (e) => {
    e.preventDefault();
    console.log(editMode);
    dispatch(toggleEdit());
  };
  const handleEdit = (e) => {
    e.preventDefault()
    console.log(editMode);
    dispatch(toggleEdit());
  }
  return (
    <footer className="flex justify-center items-center  w-full fixed bottom-2">
      <div className="flex justify-end border-t-1 border-brownDefault py-1 px-2 w-[400px]">
        {editMode ? <><button
          className="text-xs cursor-pointer font-light ml-1.5 
            text-black bg-brownBackground py-1 px-2.5 
            rounded-full border-1 border-brownDefault"
        >
          Cancel
        </button>
        <button
          className="text-xs cursor-pointer font-ligt ml-1.5 
            text-white bg-brownDefault p-1 px-2 rounded-full"
          onClick={handleSave}
        >
          Save
        </button> </> : 
        <>
          <button className ='cursor-pointer font-light text-xs ml-1.5 
          text-white bg-brownDefault p-1 px-2 rounded-full'
          onClick = {handleEdit}>
            Edit 
          </button>
        </>}
      </div>
    </footer>
  );
}
