import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: ReactNode;
}
export const ModalForm: React.FC<ModalProps> = ({ children }) => {
  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return null;
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-container z-40 background h-screen w-screen  inset-0 bg-slate-800/50 backdrop-blur-sm fixed top-0 left-0">
        {children}
      </div>
    </div>,
    modalRoot
  );
};
