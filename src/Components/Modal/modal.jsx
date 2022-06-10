import "./modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { ToggleModal } from "../../reducer/postSlice";
import { TextImageEdit } from "../TextImageEdit/textImageEdit";
import { useDispatch } from "react-redux";

export const Modal = () => {
  const dispatch = useDispatch();
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
            postState: true,
          }}
        />
      </div>
    </div>
  );
};
