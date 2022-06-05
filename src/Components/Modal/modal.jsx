import "./modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { ToggleModal } from "../../reducer/postSlice";
import { TextImageEdit } from "../TextImageEdit/textImageEdit";

export const Modal = () => {
  return (
    <div className="flex-center modal-wrapper">
      <div className="modal">
        <AiOutlineClose
          className="text-sm cursor"
          onClick={() => dispatch(ToggleModal(false))}
        />
        <TextImageEdit
          prop={{
            textData: "",
            imagesData: undefined,
            disabledState: false,
          }}
        />
      </div>
    </div>
  );
};
